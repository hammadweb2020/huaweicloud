import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


const JWPlayer = ({ source, poster, className, repeat }) => {
  let el

  useEffect(() => {
    // eslint-disable-next-line no-undef

    jwplayer(el).setup({
      file: source,
      image: poster,
      autostart: true,
      mute: true,
      width: '100%',
      height: '100%',
      aboutlink: 'https://bluamoeba.com',
      abouttext: 'Powered by Bluamoeba',
      displaytitle: false,
      displaydescription: false,
      repeat: { repeat }
    })
  }, [el, poster, repeat, source])

  return (
    <div className={className}>
      <div ref={div => (el = div)} />
    </div>
  )
}

JWPlayer.propTypes = {
  poster: PropTypes.string,
  source: PropTypes.string.isRequired,
  className: PropTypes.string,
  repeat: PropTypes.bool
}

export default JWPlayer