import {Component} from "react";
import {Product} from "../../common/Product/Product";
import home_banner1 from "../../../images/home_banner1.jpg";
import home_banner2 from "../../../images/home_banner2.jpg";
import home_banner3 from "../../../images/home_banner3.jpg";
import home_banner4 from "../../../images/home_banner4.jpg";
import home_banner5 from "../../../images/home_banner5.jpg";
import home_banner6 from "../../../images/home_banner6.jpg";
import mf1 from "../../../images/manufactor_logo_1.png";
import mf2 from "../../../images/manufactor_logo_2.png";
import mf3 from "../../../images/manufactor_logo_3.png";
import mf4 from "../../../images/manufactor_logo_4.png";
import mf5 from "../../../images/manufactor_logo_5.png";
import mf6 from "../../../images/manufactor_logo_6.png";
import mf7 from "../../../images/manufactor_logo_7.png";
import mf8 from "../../../images/manufactor_logo_8.png";
import mf9 from "../../../images/manufactor_logo_9.png";
import mf10 from "../../../images/manufactor_logo_10.png";
import mf11 from "../../../images/manufactor_logo_11.png";
import mf12 from "../../../images/manufactor_logo_12.png";
import mf13 from "../../../images/manufactor_logo_13.png";
import mf14 from "../../../images/manufactor_logo_14.png";
import mf15 from "../../../images/manufactor_logo_15.png";
import mf16 from "../../../images/manufactor_logo_16.png";
import mf17 from "../../../images/manufactor_logo_17.png";
import mf18 from "../../../images/manufactor_logo_18.png";
import axios from "axios";


export class Home extends Component {

    private api: any;

    constructor(props:{}|Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData=async ()=>{
        try {
            /*const response = await fetch('./product-data.json');
            const jsonData = await response.json();*/
            this.api.get('/products/all').then((res:{data:any})=>{
                const jsonData = res.data;
                this.setState({data: jsonData});
            }).catch((error:any)=>{
                console.error('Axios Error', error)
            })
        }catch (error){
            console.log('Error Fetching Data ', error);
        }
    }

    render() {
        const images = [mf1, mf2, mf3, mf4, mf5, mf6, mf7, mf8, mf9, mf10, mf11, mf12, mf13, mf14, mf15, mf16, mf17, mf18];

        const home_banner = [home_banner1, home_banner2, home_banner3, home_banner4, home_banner5,home_banner6];

        // @ts-ignore
        const {data}=this.state;

        return (
            <div className="flex">
                <div
                    className="flex flex-wrap justify-start items-center mx-auto bg-[url(images/main_bg.jpg)] bg-cover">
                    <div className="mb-16">
                        <div className="xl:container mx-auto">
                            <div className=" flex items-center  justify-center">
                                <div className="w-[600%] overflow-hidden ">
                                    <div
                                        className="w-[600%] flex items-center home-banner-animate">
                                        {home_banner.map((i, index) => {
                                            return (
                                                <div className="flex justify-center items-start w-full">
                                                    <img key={index} src={i}/>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<img className="w-full" src={home_banner1} alt=""/>*/}
                    </div>
                    <div className="pl-16 pr-16 xl:container xl:block hidden mx-auto mb-16">
                        <div className=" flex items-center  justify-center">
                            <div className="w-[500%] h-20 overflow-hidden relative">
                                <div
                                    className="w-[500%] flex items-center h-20 justify-around absolute left-0 gap-20 animate">
                                    {images.map((i, index) => {
                                        return (
                                            <div className="flex justify-center items-start w-[20rem]">
                                                <img key={index} src={i}/>
                                            </div>
                                        );
                                    })}
                                    {images.map((i, index) => {
                                        return (
                                            <div className="flex justify-center items-start w-[20rem]">
                                                <img key={index} src={i}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        data.map((product:any)=>(
                            <Product key={product.id} data={product}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}
