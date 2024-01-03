import Image from 'next/image';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

export const DropzoneComponent = ({ name, setValue, ...props }) => {
  const allFiles = props.value ? props.value : [];
  const [files, setFiles] = useState(allFiles);
  const [selectedFiles, setSelectedFiles] = useState(allFiles);
  // set field value from allFiles
  //   useEffect(() => {
  //     form.setFieldValue(field.name, allFiles);
  //   }, []);

  // dropzone with preview and validation
  function handleAcceptedFiles(acceptedFiles) {
    console.log('Accepted Files:', acceptedFiles);
    const getFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    // merge new files with existing files
    const newFiles = [...files, ...getFiles];
    setFiles(newFiles);
    // setFiles(getFiles);
    setSelectedFiles(newFiles);
    setValue(name, newFiles);
    // form.setFieldValue(field.name, newFiles);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function handleRemoveFile(file) {
    console.log('Removing File:', file);
    const newFiles = files.filter((f) => f !== file);
    setFiles(newFiles);
    setSelectedFiles(newFiles);
    // allRemoveFiles.push(file);
    // form.setFieldValue(field.name, newFiles);
  }

  // dropzone
  return (
    <div className="">
      <Dropzone
        onDrop={(acceptedFiles) => {
          handleAcceptedFiles(acceptedFiles);
        }}
        // accept="image/*"
        // onRemoveFile={handleRemoveFile}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          //   isDragAccept,
          isDragReject,
        }) => {
          let className = 'dropzone-input';
          if (isDragActive) {
            className += ' active';
            if (isDragReject) {
              className += ' rejected';
            } else {
              className += ' accepted';
            }
          }
          return (
            <div {...getRootProps()} className={className}>
              <input {...getInputProps()} />
              Drop File here
              <div className="dz-clickable">
                <div className="dz-message needsClick" {...getRootProps()}>
                  <div className="mb-3">
                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Dropzone>
      <div className="dropzone-preview grid grid-cols-4">
        {selectedFiles.map((file) => (
          <div key={file.name} className="dropzone-preview-item flex">
            <div className="dropzone-preview-item-image">
              {/* <img
                className="avatar-xs"
                src={file.preview}
                alt={file.name}
                width={75}
                height={75}
              /> */}

              <Image className="avatar-xs"
                src={file.preview}
                alt={file.name}
                width={75}
                height={75}/>
            </div>
            {/* <div className="dropzone-preview-item-details">
              <div className="dropzone-preview-item-details-name">
                {file.name}
              </div>
              <div className="dropzone-preview-item-details-size">
                {file.formattedSize}
              </div>
            </div> */}
            <div
              className="dropzone-preview-item-remove"
              onClick={() => handleRemoveFile(file)}
            >
              X
              <i className="ri-close-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
