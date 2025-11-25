import classes from './App.module.css'
import MapDisplay from './mapRelated/MapDisplay'
function App() {
  return (
    <div className={classes.page}>
      <h1 className={classes.header}>This is the map</h1>
      <div className={classes.mapDisplay}>
        <MapDisplay/>
      </div>
    
    </div>
  )
}

export default App
