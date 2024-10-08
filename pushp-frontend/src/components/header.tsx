import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = {_id: "jlk", role: "admin"};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logOutHandler = () => {
    setIsOpen(false);
  }
  return (
    <nav className="header">
        <Link onClick={() => setIsOpen(false)} to={"/"}>HOME</Link>
        <Link onClick={() => setIsOpen(false)} to={"/search"}><FaSearch/></Link>
        <Link onClick={() => setIsOpen(false)} to={"/cart"}><FaShoppingBag/></Link>

        {
            user?._id ? (
                <>
                    <button onClick={()=>setIsOpen((prev) => !prev)}>
                        <FaUser/>
                    </button>
                    <dialog open={isOpen}>
                        <div>
                            {
                                user.role === "admin" && (
                                    <Link to="/admin/dashboard" onClick={() => setIsOpen(false)}>Admin</Link>
                                )
                            }
                            <Link to="/orders" onClick={() => setIsOpen(false)}>Orders</Link>
                            <button onClick={logOutHandler}>
                                <FaUser/>
                            </button>
                        </div>
                    </dialog>
                </>
            ) : <Link to={"/login"}>
                <FaSignInAlt/>
            </Link>
        }
    </nav>
  )
}

export default Header