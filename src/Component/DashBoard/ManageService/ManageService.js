
import Sidebar from '../Sidebar/Sidebar';


const ManageService = () => {
   
    return (
        <section className="container-fluid row">
        <Sidebar/>
         <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
             <h5 className="text-primary">Manage Services</h5>
           
        </div>
        </section>
    );
};

export default ManageService;