import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {
    const [productData, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    // const [selectedColor, setSelectedColor] = useState('blue')





    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        console.log(data);
        setProduct(data);
        // setCategory(data)

        let cateData = []
        data.map((v) => {
            if (!cateData.includes(v.category)) {
                (cateData.push(v.category))
            }
        })

        setCategory(cateData);

    }

    const handleFind = () => {
        // console.log("hfhfd");

        let availableItem = productData.filter((v) =>
            v.title.toLowerCase().includes(search) ||
            v.description.toLowerCase().includes(search) ||
            v.price.toString().includes(search)
        )

        availableItem = availableItem.sort((a, b) => {
            if (sort === "lh") {
                return a.price - b.price;
            } else if (sort === "hl") {
                return b.price - a.price;
            } else if (sort === "az") {
                return a.title.localeCompare(b.title);
            } else if (sort === "za") {
                return b.title.localeCompare(a.title);
            }
        });

        if (selectedCategory) {
            availableItem = availableItem.filter((v) => v.category === selectedCategory)
        }

        console.log(availableItem);
        return availableItem

    }

    const finalData = handleFind()
    console.log(finalData);

    return (
        <div className='container' >
            <div className='row '>
                <h2 className='text-center' >Products</h2>
                <div className='mb-3 text-center'>
                    <input type='search'
                        id='searchBox'
                        placeholder='Search...'
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <br></br>
                    <br></br>

                    <select onChange={(event) => setSort(event.target.value)}>
                        <option value="0">--sort--</option>
                        <option value="lh">Price:Low to High</option>
                        <option value="hl">Price:High to Low</option>
                        <option value="az">Product:A to Z</option>
                        <option value="za">Product:Z to A</option>

                    </select>
                    <br />
                    <button style={{background: selectedCategory === '' ? "blue" :"none" }} onClick={()=>setSelectedCategory('')}  className='m-1 p-1 rounded'>All</button>

                    {

                        category.map((v) => (
                            <button style={{background: v===selectedCategory ? "blue" :"white" }} onClick={() => setSelectedCategory(v)} className='m-1 p-1 rounded'> {v}</button>
                        ))

                    }




                </div>


                {

                    finalData.map((v, i) => (
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
        </div >

    );
}




export default Product;    