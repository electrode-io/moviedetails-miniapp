/* eslint-disable no-undef, max-params */
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { bs } from './components/base-styles'
import starFull from './assets/star-full.png'
import starEmpty from './assets/star-empty.png'
import starPartial from './assets/star-partial.png'
const PropTypes = require('prop-types');

export default class MovieDetails extends Component {
  constructor (props) {
    super(props)
    let movieData

    try {
      if (props.movie) {
        console.log(`Received props: ${props.movie}`)
        movieData = JSON.parse(props.movie)
      } else {
        movie = {
          'releaseYear': 1994,
          'title': 'The Shawshank Redemption',
          'id': '1',
          'rating': 9.199999809265137,
          'imageUrl': 'http://cdn.playbuzz.com/cdn/61e69b26-aaa2-48a7-975a-29421b606abc/8c1acb1d-d9d9-4314-b7f9-589ffcef25cf.jpg'
        }
        movieData = JSON.parse(JSON.stringify(movie))
      }

    } catch (err) {
      console.log(`No Data received, will use default data. Error: ${err}`)
      movieData = {}
    }

    this.state = {
      submitPressed: false,
      name: movieData.title,
      movieDetail: movieData
    }
  }

  getStarIcon (rating, index) {
    if (rating <= 0 || rating < index) {
      return starEmpty
    }

    if (rating <= index + 0.6 && rating > index) {
      return starPartial
    }

    if (rating > index + 0.6) {
      return starFull
    }

    return starEmpty
  }

  renderStars (rating) {
    if (rating) {
      return (
        <View style={[bs.flexRow, {marginTop: 5, alignItems: 'center'}]}>
          <View style={bs.flexRow}>
            <Image
              style={{width: 20, height: 20}}
              source={this.getStarIcon(rating, 0)}
            />
            <Image
              style={{width: 20, height: 20}}
              source={this.getStarIcon(rating, 1)}
            />
            <Image
              style={{width: 20, height: 20}}
              source={this.getStarIcon(rating, 2)}
            />
            <Image
              style={{width: 20, height: 20}}
              source={this.getStarIcon(rating, 3)}
            />
            <Image
              style={{width: 20, height: 20}}
              source={this.getStarIcon(rating, 4)}
            />
          </View>
        </View>
      )
    }
  }

  renderReview (movieDetail) {
    console.log(`rendering: ${JSON.stringify(movieDetail)}`)
    return (
      <View
        style={{
          backgroundColor: 'white'
        }}
      >
        <View style={{flexGrow: 1, flexDirection: 'row'}}>
          <View style={{flexGrow: 0.2}}>
            <Image
              style={[styles.image]}
              source={{
                uri: movieDetail.imageUrl ? movieDetail.imageUrl : 'http://image10.bizrate-images.com/resize?sq=60&uid=2216744464?odnHeight=100&odnWidth=100&odnBg=FFFFFF'
              }}
            />
          </View>
          <View style={{flexGrow: 0.8}}>
            <View style={{flexGrow: 1, flexDirection: 'column', marginLeft: 10}}>
              <Text style={[bs.strongBodyText, {flexShrink: 1}]}>
                {movieDetail.title}
              </Text>
              <Text style={{marginTop: 10}}>
                Release Year: {movieDetail.releaseYear}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          {this.renderStars(movieDetail.rating)}
        </View>
        <View style={{marginTop: 15}}>
          <Text style={{flexShrink: 1}}>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            "</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={[styles.background]}>
        <View style={{flexGrow: 1, flexDirection: 'column'}}>
          <View style={{flexGrow: 1}}/>
          <View style={styles.dialog} elevation={10}>
            <View
              style={{
                paddingHorizontal: 15,
                backgroundColor: 'white',
                flexShrink: 1
              }}
            >
              {
                this.renderReview(this.state.movieDetail)
              }
            </View>
          </View>
          <View style={{flexGrow: 1}}/>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    flexShrink: 1,
    alignSelf: 'center'
  },
  background: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  dialog: {
    flexGrow: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    // alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    elevation: 10,
    marginHorizontal: 30
  }
})
