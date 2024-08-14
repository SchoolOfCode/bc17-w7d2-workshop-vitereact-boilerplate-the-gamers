import "./card.module.css";

function Card() {
  const cards = [{img: "works", title:"Give us a call...", desc:`Call us and book in a "Design Consulation" on a date and time to suit you`}]
  return (
  
     
    <figure class="card">
    <img class="card_img" src="/images/how-it-works-1.png" alt="image" />
    <figcaption class="card_caption">
        <h2 class="card_caption_title">Give us a call...</h2>
        <p class="card_caption_desc">
            Call us and book in a "Design Consulation" on a date
            and time to suit you.
        </p>
    </figcaption>
</figure>


{
  img: 
  title:
  desc:
  }


  )
}


export default Card;
