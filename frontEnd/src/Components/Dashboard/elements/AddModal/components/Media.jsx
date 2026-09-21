import UploadInputs from "./UploadInputs";

function Media({ posterFile, bannerFile, trailerFile, setter }) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-semibold text-text-primary">Media</h3>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 text-sm">
        <UploadInputs
          fileTypes={"image"}
          placeHolder={"Upload poster"}
          value={'posterFile'}
          setter={setter}
        />
        <UploadInputs
          fileTypes={"image"}
          placeHolder={"Upload banner"}
          value={'bannerFile'}
          setter={setter}
        />
        <UploadInputs
          fileTypes={"video"}
          placeHolder={"Upload trailer"}
          value={'trailerFile'}
          setter={setter}
        />
      </div>
    </section>
  );
}

export default Media;
