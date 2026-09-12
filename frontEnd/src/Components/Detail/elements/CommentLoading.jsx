function CommentLoading() {
  return (
    <div className="mt-3 flex items-center rounded-xl border-2 px-5 py-5 bg-gray-900 animate-pulse">
      <div className="w-10 h-10 rounded-md bg-gray-950 animate-pulse"></div>
      <div className="ml-5 w-full">
        <div className="flex items-center justify-between">
          <h5 className="bg-gray-950 animate-pulse w-20 h-5 rounded-md"></h5>
          <p className="rounded-md bg-gray-950 animate-pulse w-20 h-5"></p>
        </div>
        <div className="mt-1.5 text-text-secondary relative">
          <div className="bg-gray-950 animate-pulse w-full  h-3.5 rounded-md"></div>
          <div className="mt-0.5 bg-gray-950 animate-pulse w-full  h-3.5 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default CommentLoading;
