function changeImage()
{
    const secondImg = document.getElementById("image1");

    const newImage = "https://images.unsplash.com/photo-1599235553279-f1aefe8cd0b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=312&q=80";

    secondImg.src = newImage;
}

function changeImageAgain()
{
    const thirdImg = document.getElementById("image1");

    const newImage2 = "https://images.unsplash.com/photo-1599007865840-fb199f1d1959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

    thirdImg.src = newImage2;

}

function changeBackToFirst()
{
    const firstImg = document.getElementById("image1");

    const newImage3 = "https://images.unsplash.com/photo-1585914275412-280b26488662?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=309&q=80";

    firstImg.src = newImage3;
}