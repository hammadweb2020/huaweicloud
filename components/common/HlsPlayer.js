import ReactHlsPlayer from 'react-hls-player';

class Index extends Component {

  render() {
    return (
      <div>
        <ReactHlsPlayer
        src="/sample-mp4-file.mp4"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
        />
      </div>
    );
  }
}

export default Index;