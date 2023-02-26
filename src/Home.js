import { Paper } from "@mui/material"
function Home() {
    return (
        <div className="home">
            <h1>Welcome To The School Of J-Rock</h1>
            <Paper>
                           <p>"Hey at J-Rock, our teachers are equipped to teach just about any instrument.Choose an instrument you want to learn and don't worry if you feel like you have made the wrong instrument choice. At any time in your lessons, you can change your instrument because our multi-talented teachers will be happy to make that change."</p>
            
            <div className="home-img-container">
            <img src={"https://www.primeauguitar.com/wp-content/uploads/2019/08/MG_0950-e1565466754803.jpg"} alt={"Home URL"} />
            <img src={"https://www.lasvegasvoiceandpiano.com/wp-content/uploads/2022/05/Vocal-Lessons-Las-Vegas-Banner.jpg"} alt={"Home URL"} />
            <img src={"https://www.sanantoniomusicschools.com/wp-content/uploads/2020/08/experienced-master-piano-hand.jpg"} alt={"Home URL"} />

            </div>
            </Paper>
        </div>
    )
}

export default Home