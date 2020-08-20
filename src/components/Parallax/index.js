import React from "react";
// import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Parallax () {
return ( 
<div class="cd-background-wrapper">
<figure class="cd-floating-background is-absolute"> 

<img src="https://codyhouse.co/demo/parallax-hero-image/img/cd-img-1.jpg" alt="image-1"/>
<img src="https://codyhouse.co/demo/parallax-hero-image/img/cd-img-2.png" alt="image-2"/>
<img src="https://codyhouse.co/demo/parallax-hero-image/img/cd-img-3.png" alt="image-3"/>
</figure>
</div>
    )
}

export default Parallax;