import {Component} from "react";
import {CartItem} from "../../../model/CartItem";


interface ModifyCartProps {
    data: any
}

interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps,ModifyCartState> {

    public static itemsList: CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        // @ts-ignore
        const {itemCount} = this.state;
        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                );
            }
        }
        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item = ModifyCart.itemsList
            .find(item =>
                item.product.id ===
                this.props.data.product.id);

        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);

        ModifyCart.itemsList.splice(index,1);

        ModifyCart.itemsList.push(
            {
                product: this.props.data.product,
                itemCount: itemCount
            }
        );

        console.log(ModifyCart.itemsList);
    }

    render() {
        let itemCount = this.state.itemCount;

        const onDecreaseItemCount = () => {
            if (itemCount > 1) {
                this.setState({itemCount: --itemCount});
            } else {
                alert("Item count can't be less than 1")
            }
        }

        const onIncreaseItemCount = () => {
            this.setState({itemCount: ++itemCount});
        }

        return (
            <div
                className="w-full h-10 p-[2.5px] bg-[#2cc1fc] flex justify-center items-center text-white text-[14px] rounded-b-2xl">
                <button className="float-left flex justify-center items-center font-bold text-[20px]   h-5 w-8"
                        onClick={onDecreaseItemCount}>-
                </button>
                <small className="text-[16px] font-bold ml-16 mr-16">{itemCount}</small>
                <button className="flex justify-center items-center float-right font-bold text-[20px]   h-5 w-8"
                        onClick={onIncreaseItemCount}>+
                </button>
            </div>
        );
    }
}