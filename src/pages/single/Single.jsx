import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import Tables from "../../components/table/Tables"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/8668602/pexels-photo-8668602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="itemImg" />
            <div className="details">
              <h1 className="itemTitle">James Bond</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">JamesB007@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">(321)254-3300</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">22 B Bakers st</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">UK</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Single