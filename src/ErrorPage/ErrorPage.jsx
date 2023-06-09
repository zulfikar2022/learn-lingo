import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full   my-5 ml-20">
            <img src={'https://i.ibb.co/Ld1fvsL/4O4Page.jpg'} alt="" />
            <br />
            <Link className="text-center ml-auto mr-auto my-btn" to='/'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;