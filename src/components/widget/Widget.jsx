import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import "./widget.scss"

const Widget = ({type}) => {
    let data;
    let amount = 100;
    let percentage = 20;

    switch(type){
        case 'user' :
            data={
                title: 'Users',
                isMony: false,
                widgetLink: 'See all users',
                widgetIcon: <PersonOutlined className="widgetIcon"
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
                />,
            }
            break
        case 'order' :
            data={
                title: 'Orders',
                isMony: false,
                widgetLink: 'View all orders',
                widgetIcon: <ShoppingCartOutlined className="widgetIcon"
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}
                />,
            }
            break
        case 'earning' :
            data={
                title: 'Earning',
                isMony: true,
                widgetLink: 'View net earning',
                widgetIcon: <MonetizationOnOutlined className="widgetIcon"
                style={{ 
                    backgroundColor: "rgba(0, 128, 0, 0.2)", 
                    color: "green" 
                }}
                />,
            }
            break
        case 'balance' :
            data={
                title: 'Balance',
                isMony: true,
                widgetLink: 'See Details',
                widgetIcon: <AccountBalanceOutlined className="widgetIcon"
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                  }}
                />,
            }
            break

            default:
                break;

    }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMony && '$'}{amount}</span>
            <span className="widgetLink">{data.widgetLink}</span>
        </div>
        <div className="right">
            <div className="pircentage positive">
                <KeyboardArrowUp />
                {percentage}%
                </div>
           {data.widgetIcon}
        </div>
        
    </div>
  )
}

export default Widget

// 1 00 00