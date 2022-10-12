import Header from "@/components/Headers"

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