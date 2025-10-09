const body = document.querySelector('body');
const mainContainer = document.querySelector('.container');
const h1 = document.querySelector('h1');
const nameText = document.getElementById('userName');

const loader = document.querySelector('.lds-ripple');

body.style.cssText = `
height: 100vw;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(to bottom, #fff1eb 0%, #ace0f9 100%);
background-repeat: no-repeat;
background-size: cover;`;

h1.style.cssText = `
  background-image: linear-gradient(to left, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);
  -webkit-background-clip: text;
  color: transparent;
`;

const loaderMsg = document.createElement('p');
loaderMsg.textContent = 'Loading ...';

loaderMsg.style.cssText = `
display: block;
padding: 30px;
background-color: rgba(76, 186, 124, 0.2);
border-radius: 15px;
`;


// const showLoader = () => {
// }

const getRandomUser = () => {
    return fetch('https://randomuser.me/api/');
}

const main = async () => {
    // showLoader();
    const userPromise = getRandomUser();

    // if (userPromise.status !== 200) { // <--------- if promise pending show loader
    //     showLoader();
    // }

    const result = await userPromise;
    const jsonData = await result.json();

    loaderMsg.remove(); // <--------- when promise resolved remove msg
    loader.remove();
    console.log(userPromise);
    console.log(jsonData);
    const userData = jsonData.results[0];
    const userNameFirst = userData.name.first;
    const userNameLast = userData.name.last;

    nameText.innerHTML = `Meet ${userData.name.title} ${userNameFirst} ${userNameLast}`;

    const userAddress = document.createElement('h3');
    userAddress.innerText = `${userData.name.first} lives in ${userData.location.city} (${userData.location.country})`;
    mainContainer.appendChild(userAddress);

    const imgUrl = userData.picture.large;
    console.log(imgUrl);
    const img = document.createElement('img');
    mainContainer.appendChild(img);
    img.src = imgUrl;

    img.style.cssText = `
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    scale: 1.1;`;


    const emailAddress = userData.email; // This is just a string
    const emailAddressLink = document.createElement('a'); // This is the <a> element

    emailAddressLink.href = `mailto:${emailAddress}`;
    emailAddressLink.textContent = emailAddress;

    mainContainer.appendChild(emailAddressLink);

}


main();

