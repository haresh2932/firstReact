import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {
    const [productData, setProduct] = useState([])
    const [search,setSearch]=useState("")



    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        console.log(data);
        setProduct(data);

    }

    const handleFind=(event)=>{
        console.log("hfhfd");
        setSearch(event.target.value)

        const availableItem=productData.filter((v)=>v.title||v.description)
       
    }

    return (
        <div className='container align-self-center' >
            <div className='row'>
                <h2 className='text-center' >Products</h2>
                <input type='search'  id='searchBox' onChange={handleFind}></input>

                {

                    productData.map((v, i) => (
                        <div className='col-md-4 gy-5 '>

                            <Card
                                style={{
                                    width: '18rem',
                                }}                        >
                                <img src={v.image} width={"150px"} height={"200px"} className="align-self-center" />
                                <CardBody>
                                    <CardTitle tag="h5" className='text-truncate'>
                                        {v.title}

                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.price}
                                    </CardSubtitle>
                                    <CardText className='text-primary-emphasis text-truncate' tag='p'>
                                        {v.description}
                                    </CardText>
                                    <Button >
                                        Add to cart
                                    </Button>
                                </CardBody>
                            </Card>

                        </div>
                    ))
                }
            </div>
        </div>

    );
}




export default Product;    