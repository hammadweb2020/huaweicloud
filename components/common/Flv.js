import {ReactFlvPlayer} from 'react-flv-player'

class Index extends Component {

  render() {
    return (
      <div>
        <ReactFlvPlayer
        type={flv}
   
          url = "/sample-mp4-file.mp4"
          heigh = "800px"
          width = "800px"
          isMuted={true}
          isLive={true}
          handleError={(err) => {
            switch (err) {
              case 'NetworkError':
                // todo
                console.log('network error');
              break;
              case 'MediaError':
                console.log('network error');
              break;
              default:
                console.log('other error');
            }
          }}
        />
      </div>
    );
  }
}

export default Index;