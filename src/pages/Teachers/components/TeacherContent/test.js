import React, { useEffect } from "react"

const Test = (props) =>{

     useEffect (() => {
        if(window.onload)
        {
        
        }
        else{
            
        }
     })
    }


//     // const Load = () => {
//     //     document.body.classList.add('loaded_hiding');
//     //     window.setTimeout(function () {
//     //       document.body.classList.add('loaded');
//     //       document.body.classList.remove('loaded_hiding');
//     //     }, 500);
//     // }
//     const async saveComment: () => {
//         this.preloader = true;
//         try {
//           let form = new FormData();
//           let response;
//           if (this.commentId !== null) {
//             response = await this.axios.post(`${commentUrl}/edit/1/${this.commentId}`, form);
//           } else response = await this.axios.post(`${commentUrl}/add/1`, form);
  
//           console.log(response.data.success);
//           await this.loadComments();
//         } catch (e) {
//           console.log(e);
//         }
//         this.commentText = '';
//         this.saveLoading = false;
//         this.showButtonsEdit = false;
//         this.commentId = null;
//       }
//     return(
//         <>{props.children}</>
//     )

// }
export default Test;