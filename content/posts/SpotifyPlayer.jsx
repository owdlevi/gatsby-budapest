/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from 'react'

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380
  },
  compact: {
    width: 300,
    height: 80
  }
}

/**
 * SpotifyPlayer class
 */
const SpotifyPlayer = props => {
  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  const { uri, view, theme } = props
  let { size } = props

  if (typeof size === `string`) {
    size = sizePresets[size]
  }

  return (
    <iframe
      title="Spotify"
      className="SpotifyPlayer"
      src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
      width={size.width}
      height={size.height}
      frameBorder="0"
      allowtransparency="true"
    />
  )
}

export default SpotifyPlayer
