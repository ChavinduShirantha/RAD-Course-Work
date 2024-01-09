import {Component} from "react";
import axios from "axios";

interface ContactProps {
    data: any;
}

interface ContactState {
    name: string;
    contact: string;
    email: string;
    message: string;
}

export class Contact extends Component<ContactProps, ContactState> {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            name: '',
            contact: '',
            email: '',
            message: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        return (
            <div className="flex bg-[url(images/main_bg.jpg)] bg-no-repeat">
                <div className="h-auto w-1/2 mt-3 pt-10 pb-10 pl-10 pr-10 mx-auto">
                    <div className="p-2">
                        <h2 className="text-3xl
                                       text-[#2cc1fc]
                                       decoration-2
                                       font-bold
                                       uppercase">Get In Touch</h2>
                        <p className="pb-3 mt-2 text-[14px] text-white">Got a technical issue?
                            Want to contact us?
                            Please let us assist you...</p>
                    </div>

                    <form className="h-auto p-2">
                        <div className="flex flex-row">
                            <div className="pb-2 basis-1/2">
                                <label className="text-white text-[14px]">Your Name :</label>
                                <input type="text"
                                       className="block w-5/6 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="name"
                                       value={this.state.name}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                            <div className="pb-2 basis-1/2">
                                <label className="text-white text-[14px]">Your Phone No. :</label>
                                <input type="tel"
                                       className="block w-5/6 px-4 py-2 mt-2 bg-[#444544] text-white border
                                       rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                       focus:ring focus:ring-opacity-40"
                                       name="contact"
                                       value={this.state.contact}
                                       onChange={this.handleMessageInputOnChange}/>
                            </div>
                        </div>
                        <div className="pb-2">
                            <label className="text-white text-[14px]">Your Email :</label>
                            <input type="email"
                                   className="block w-11/12 px-4 py-2 mt-2 bg-[#444544] text-white border
                                   rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none
                                   focus:ring focus:ring-opacity-40"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="pb-2">
                            <label className="text-white text-[14px]">Your Message :</label>
                            <textarea
                                className="block h-40 w-11/12 px-4 py-2 mt-2 bg-[#444544] text-white border
                                rounded-md focus:border-[#2cc1fc] focus:ring-[#2cc1fc] focus:outline-none focus:ring
                                focus:ring-opacity-40 resize-none"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleMessageInputOnChange}/>
                        </div>

                        <div className="mt-2 float-right">
                            <button type="button"
                                    className="mt-5 mr-14 pl-6 pr-6 pt-2 pb-2 bg-[#2cc1fc] text-[16px]
                                    font-bold text-white rounded hover:bg-[#444544] hover:border-[2px]
                                    hover:border-[#2cc1fc] hover:text-[#2cc1fc]"
                                    onClick={this.onSendBtnClick}>Sent
                            </button>
                        </div>
                    </form>
                </div>
                <div className="h-auto w-1/2 mt-10 pt-10 pb-10 pl-10 pr-10 mx-auto">
                    <div className="p-2">
                        <h2 className="text-2xl
                                       text-[#2cc1fc]
                                       font-bold
                                       text-center
                                       uppercase
                                       decoration-2
                                       mb-2">Address</h2>

                        <h4 className="pt-3 text-[16px] font-bold text-white">Head Office :</h4>
                        <p className="text-[15px] text-white">No.50, New Road, Ambalangoda, Sri Lanka.</p>
                        <h4 className="pt-3 text-[16px] font-bold text-white">Galle Branch :</h4>
                        <p className="text-[15px] text-white">No.207C, Wakwella Road, Galle, Sri Lanka.</p>
                        <h4 className="pt-3 text-[16px] font-bold text-white">Matara Branch :</h4>
                        <p className="text-[15px] text-white">No.61A, Anagarika Dharmapala Mawatha, Matara, Sri
                            Lanka.</p>
                        <div
                            className="relative flex items-center justify-center w-full mt-10 mb-5 border border-t"></div>
                    </div>
                    <div className="p-2">
                        <h2 className="text-2xl
                                       text-[#2cc1fc]
                                       font-bold
                                       text-center
                                       uppercase
                                       decoration-2
                                       mb-2">Phone</h2>
                        <div className="flex flex-row">
                            <div className="basis-1/3">
                                <h4 className="pt-3 text-[16px] font-bold text-white">Head Office :</h4>
                                <p className="text-[16px] text-white">+94 912 255 942</p>
                            </div>
                            <div className="basis-1/3">
                                <h4 className="pt-3 text-[16px] font-bold text-white">Galle Branch :</h4>
                                <p className="text-[16px] text-white">+94 912 246 200</p>
                            </div>
                            <div className="basis-1/3">
                                <h4 className="pt-3 text-[16px] font-bold text-white">Matara Branch :</h4>
                                <p className="text-[16px] text-white">+94 412 050 800</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: {value: any; name: any;} }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('/contact/submit', {
                name: this.state.name,
                contact: this.state.contact,
                email: this.state.email,
                message: this.state.message
            }).then((res: { data: any}) => {
                const jsonData = res.data;
                alert(jsonData);
            }).catch((error: any)=> {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }
}
