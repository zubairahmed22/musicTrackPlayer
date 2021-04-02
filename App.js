import React,{useEffect,} from "react"
import TrackPlayer from "react-native-track-player"
import 
{View,Text,TouchableOpacity,StyleSheet} from "react-native"


const tracks = [
  {id:1,
    url: require("./Track/song1.mp3"),
    title: "balochiSong",
    artist: "adilShohaz"

  },

  {id:2,
    url: require("./Track/song2.mp3"),
    title: "balochiSong",
    artist: "adilShohaz"
    
  }
]

TrackPlayer.updateOptions({
  stopWithApp: false,
  capabilities: [TrackPlayer.CAPABILITY_PLAY,TrackPlayer.CAPABILITY_PAUSE],
  compactCapabilities:[TrackPlayer.CAPABILITY_PLAY,
  TrackPlayer.CAPABILITY_PAUSE]
})
const App =() =>{
 
  const setUpTrackPlayer = async () =>{
   
    try {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(tracks)
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(()=>{
  setUpTrackPlayer()
  return () => TrackPlayer.destroy();
  },[])
  return(
    <View style={styles.container}>
      <Text>{TrackPlayer.title}</Text>
      <View style={styles.row}>
       <TouchableOpacity style={styles.btn}
       onPress={()=> TrackPlayer.play()}
       >
       <Text style={styles.text}>Play</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn}
       onPress={() => TrackPlayer.pause()}
       >
       <Text style={styles.text}>Pause</Text>
       </TouchableOpacity>
       <View style={styles.row}>
       <TouchableOpacity style={styles.btn}
       onPress={() => TrackPlayer.skipToPrevious()}
       >
       <Text style={styles.text}>Previous</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn}
         onPress={() => TrackPlayer.skipToNext()}
       >
       <Text style={styles.text}>Next</Text>
       </TouchableOpacity>
       </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    margin:40,
 
  },
  btn:{
    backgroundColor:"orange",
    width:130,
    padding:20,
    margin:10,
    borderRadius:5

  },
  row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"wrap"
  },
  text:{
    color:"purple",
    fontSize:22,
    textAlign:"center"
  }
})

export default App;
