// export default is used to use this function in another file
export default function Footer() {
    return(
        <footer>
            <h1>Get the game now!</h1>
            <iframe src="https://store.steampowered.com/widget/512900/" frameborder="0" width="646" height="190"></iframe>
            <p>
                &copy; {new Date().getFullYear()}
                My Personal Website || Written By: Lance Angelo
            </p>
        </footer>
    )
}
