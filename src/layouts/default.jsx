import Header from "@/components/Header"

const Layout = (props) => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="contents">
                {props.children}
            </div>
        </div>
    )
}

export default Layout