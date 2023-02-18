import { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import Sidebar from "../components/Sidebar";
import { NFTStorage, File } from "nft.storage";
import mime from "mime";
// import txn from "../txn.json";
// import * from "./txn.js" as txn; 
import { getArtifacts, getArtifactCounter , insertArtifact , purchaseArtifact , setArtifactPrice } from "./txn";

const form = document.querySelector("form");
const hash = document.querySelector("#hash");
const url = document.querySelector("#url");



const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg1RDRFMTY2NUVENGI3NUI3Q2Y1M2NmNTNGYzM3ZDAyODViRjEzNDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NjcxODU4MTYyMSwibmFtZSI6ImhhY2thdGhvbiJ9.QBOLqsaxPkA19N0mUMQLrpoAEULdHvaj08iSpbhGxK8";
const client = new NFTStorage({ token: NFT_STORAGE_KEY });


function CreateDesign() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );
  const configuration = new Configuration({
    apiKey: "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",
  });
  const fileInputRef = useRef();

  const openai = new OpenAIApi(configuration);

// const worker = async (event) => {
//     event.preventDefault();
//     form.elements[1].disabled = true;
//     const file = form.elements[0].files[0];
//     const cid = await client.storeBlob(
//         new File([file], file.name, { type: file.type })
//     );
//     console.log(cid);
//     hash.innerHTML = cid.toString();
//     url.innerHTML = `<a href="https://${cid.toString()}.ipfs.nftstorage.link">https://${cid.toString()}.ipfs.nftstorage.link</a>`;
//     console.log(url.innerHTML);
//     form.elements[1].disabled = false;
//     uploadFileUsingURL();
// }

// async function uploadFileUsingURL() {
//   const fileURL = "https://file.jpg";
//   const metadata = JSON.stringify({
//     name: "file.jpg",
//     description: "file description",
//     image: fileURL,
//   });
//   const file = new File([metadata], "metadata.json", {
//     type: mime.getType("jpg"),
//   });
//   const cid = await client.storeBlob(file);
//   console.log(cid);
// }

const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setLoading(false);
    setResult(res.data.data[0].url);
    console.log(res.data.data[0].url);
  
    // post the image to IPFS
    const metadata = JSON.stringify({
        name: "image.jpg",
        description: "image description",
        image: res.data.data[0].url,
    });
    const file = new File([metadata], "image.jpg", {
        type: mime.getType("jpg"),
    });
    try{

        const cid = await client.storeBlob(file);
        let a = await insertArtifact(res.data.data[0].url, 100);
        console.log(cid);
    }
    catch(err)
    {
        console.log("Error");
    }
}
  

//   const generateImage = async () => {
//     setPlaceholder(`Search ${prompt}..`);
//     setLoading(true);
//     const res = await openai.createImage({
//       prompt: prompt,
//       n: 1,
//       size: "1024x1024",
//     });
//     setLoading(false);
//     setResult(res.data.data[0].url);

//     // set the hidden input field with the generated image url
//     const fileInput = fileInputRef.current;
//     if (fileInput) {
//       fileInput.value = res.data.data[0].url;
//     }
//   };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <h2>Generate an Image using Open AI API</h2>
      </div>
      <div className="flex flex-1 overflow-y-scroll">
        <div className="flex-none w-64">
          <Sidebar pageName={"Create Design"} />
        </div>
        <form id="upload-form" action="#" >
          <input type="file" id="file" name="file" ref={fileInputRef} style={{ display: "none" }} />
          <button type="button" onClick={() => fileInputRef.current.click() }>Upload</button>
        </form>

        <div className="flex-1 pr-64">
          {loading ? (
            <div>
              <h2>Generating..Please Wait..</h2>
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <>
              <textarea
                className="app-input"
                placeholder={placeholder}
                onChange={(e) => setPrompt(e.target.value)}
                rows="10"
                cols="40"
              />
              <button onClick={generateImage}>Generate an Image</button>
              {result.length > 0 ? (
                <img className="result-image" src={result} alt="result" />
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateDesign;
