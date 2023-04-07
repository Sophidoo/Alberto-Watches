const productCard = document.getElementById('productModal')
const techCard = document.getElementById('techModal')


const ShowProductModal = () => {
    if(techCard.style.display === 'flex'){
        techCard.style.display = 'none'
    }
    productCard.style.display = 'flex'
}
const ShowTechModal = () => {
    if(productCard.style.display === 'flex'){
        productCard.style.display = 'none'
    }
    techCard.style.display = 'flex'
}
const hideProductModal = () => {
    productCard.style.display = 'none'
}
const hideTechModal = () => {
    techCard.style.display = 'none'
}