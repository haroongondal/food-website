import "../styles/FileUpload.css";
import { useEffect, useRef, useState } from "react";

export default function FileUpload(props) {
  const start = useRef(null);
  const file_image = useRef(null);
  //   const not_image = useRef(null);
  const response = useRef(null);
  const file_upload_form = useRef(null);
  const file_drag = useRef(null);
  const [message, setMssage] = useState("");
  let base64;
  function fileSelectHandler(e) {
    // Fetch FileList object
    console.log("file drag handler: ", e.target.files);
    if (typeof e.target.files != "undefined") {
      // if (e.target.files.length > 0) {
      const file = e.target.files[0];
      //   fileDragHover(e);
      parseFile(file);
    }
  }
  function output(msg) {
    // console.log("message: ", props.message);
    props.uploadImage(base64);
    setMssage(msg);
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  function fileDragHover(e) {
    // var fileDrag = document.getElementById("file-drag");

    e.stopPropagation();
    e.preventDefault();

    file_drag.current.className =
      e.type === "dragover" ? "hover" : "modal-body file-upload";
  }
  async function parseFile(file) {
    // var fileType = file.type;
    // console.log(fileType);
    let imageName = "";
    if (file) imageName = file.name;

    const isGood = /\.(?=gif|jpg|png|jpeg)/gi.test(imageName);
    response.current.classList.remove("hidden");

    if (isGood) {
      start.current.classList.add("hidden");
      //   not_image.current.classList.add("hidden");
      // Thumbnail Preview
      file_image.current.classList.remove("hidden");
      file_image.current.src = URL.createObjectURL(file);
      //   file_drag.current.classList.remove("hover");
      //   file_drag.current.classList.add("modal-body", "file-upload");
      base64 = await convertBase64(file);
      output(encodeURI(file.name));
    } else {
      file_image.current.classList.add("hidden");
      start.current.classList.remove("hidden");
      file_upload_form.current.reset();
      file_drag.current.classList.remove("modal-body");
      //   file_drag.current.classList.add("file-upload");
      if (imageName === "") setMssage("No file selected");
      else setMssage("Upload file type not supported");
    }
  }
  useEffect(() => {
    // File Upload
    //
    // file_upload_form.current.style.width = props.width + "px";
    function ekUpload() {
      const xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // File Drop
        file_drag.current.addEventListener("dragover", fileDragHover, false);
        file_drag.current.addEventListener("dragleave", fileDragHover, false);
        file_drag.current.addEventListener("drop", fileSelectHandler, false);
      }
    }
    ekUpload();
  }, []);

  return (
    <div>
      <form className="uploader" ref={file_upload_form}>
        <input
          id="file-upload"
          ref={file_image}
          type="file"
          name="fileUpload"
          accept="image/*"
          onChange={fileSelectHandler}
        />

        <label for="file-upload" ref={file_drag}>
          <img
            id="file-image"
            src="#"
            alt="Preview"
            class="hidden"
            ref={file_image}
          />
          <div id="start" ref={start}>
            <i className="fa fa-download" aria-hidden="true"></i>
            <br className="d-block d-md-none" />
            <div className="d-md-block d-none">Select a file or drag here</div>
            {/* <div id="notimage" class="hidden" ref={not_image}>
                Please select an image
              </div> */}
            <span id="file-upload-btn" className="btn btn-primary">
              Select a file
            </span>
          </div>
          <div id="response" className="hidden" ref={response}>
            <div id="messages">{message}</div>
          </div>
        </label>
      </form>
    </div>
  );
}
