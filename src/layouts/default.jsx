import Header from "@/components/Header"

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{ padding: '1em' }}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout