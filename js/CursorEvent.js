AFRAME.registerComponent("cursor-event",{
    schema:{
        selectedComicsId : {type:"string",default:""}
    },
    init:function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
    },
    comicsList:function(){
        const id = this.el.getAttribute("id");
        const comicId = ["super-man","spider-man","captain-aero","outer-space"];
        if(comicId.includes(id)){
            const placesContainer = document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-event",{
                selectedComicsId:id
            })
            this.el.setAttribute("material",{
                color:"blue",
                opacity:1
            })
        }
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.comicsList()
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedComicsId} = this.data;
            if(selectedComicsId){
                const el = document.querySelector(`#${selectedComicsId}`);
                const id = el.getAttribute("id");
                if(id == selectedComicsId){
                    el.setAttribute("material",{
                        color:"white",
                        opacity:1
                    })
                }
            }
        })
    }
})