import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="icon-bar">
                <i className="fa-solid fa-house home-btn"></i>
                <i className="fa-solid fa-heart heart-btn"></i>
                <i className="fa-solid fa-circle-plus add-btn"></i>
                <i className="fa-solid fa-bars list-btn"></i>
            </div>
        </div>
    );
};

export default Sidebar;
