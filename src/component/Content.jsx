import "../style/content.css"

export default function Content({children}){

    return(
        <div className="background-red content-container">
            {children}
        </div>
    )
}