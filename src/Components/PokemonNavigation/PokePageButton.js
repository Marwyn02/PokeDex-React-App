const PokePageButton = (props) => {
  return (
    <div>
      <div className="flex justify-between mb-6 mt-8">
        <div>
          {props.prev && (
            <button
              className="group bg-black/80 hover:bg-black/95 duration-300 text-white h-auto py-1"
              onClick={() => {
                props.setData([]);
                props.switch(props.prev);
              }}
            >
              <div className="grid grid-cols-2 items-center py-0.5 md:py-1.5">
                <div className="group-active:-translate-x-1 group-active:md:-translate-x-4 duration-100 mx-auto text-center h-5 w-5 md:h-8 md:w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
                </div>
                <p className="pr-3 md:pr-7 text-sm text-white/80 group-hover:text-white/95 duration-300">Prev page</p>
              </div>
            </button>
          )}
        </div>
        
        <div>
          {props.next && (
            <button
              className="group bg-black/80 hover:bg-black/95 duration-300 text-white h-auto py-1"
              onClick={() => {
                props.setData([]);
                props.switch(props.next);
              }}
            >
              <div className="grid grid-cols-2 items-center py-0.5 md:py-1.5">
                <p className="pl-3 md:pl-7 text-sm text-white/80 group-hover:text-white/95 duration-300">Next page</p>
                <div className="group-active:translate-x-1 group-active:translate-x-4 duration-100 mx-auto text-center h-5 w-5 md:h-8 md:w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokePageButton;
