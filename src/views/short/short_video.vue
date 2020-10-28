<!-- home -->

<template>
  <div class="video-container">
    <template>
      <div class="video_box">
        <video id="video1" class="video-js vjs-default-skin vjs-big-play-centered">
          <source src="http://gt.shigemedia.com/vod/dianshiju/shendunjutegongdi2ji/tv/shendunjutegongdi2jidi1ji.mp4" type="application/x-mpegURL" />
        </video>
        <div class="video_box_center">
          <van-button :icon="playIcon" type="info">
            哈利·波特与魔法石
          </van-button>
          <div class="right">
            <span><img src="../../../static/img/share_b.png" alt="">567</span>
            <span class="span_end"><img src="../../../static/img/z_t.png" alt="">123</span>
          </div>
        </div>
      </div>
      <div class="video_box">
        <video id="video2" class="video-js vjs-default-skin vjs-big-play-centered">
          <source src="http://gt.shigemedia.com/vod/dianshiju/shendunjutegongdi2ji/tv/shendunjutegongdi2jidi1ji.mp4" type="application/x-mpegURL" />
        </video>
        <div class="video_box_center">
          <van-button :icon="playIcon" type="info">
            哈利·波特与魔法石
          </van-button>
          <div class="right">
            <span><img src="../../../static/img/share_b.png" alt="">567</span>
            <span class="span_end"><img src="../../../static/img/z_t.png" alt="">123</span>
          </div>
        </div>
      </div>
      <div class="video_box">
        <video id="video3" class="video-js vjs-default-skin vjs-big-play-centered">
          <source src="http://gt.shigemedia.com/vod/dianshiju/shendunjutegongdi2ji/tv/shendunjutegongdi2jidi1ji.mp4" type="application/x-mpegURL" />
        </video>
        <div class="video_box_center">
          <van-button :icon="playIcon" type="info">
            哈利·波特与魔法石
          </van-button>
          <div class="right">
            <span><img src="../../../static/img/share_b.png" alt="">567</span>
            <span class="span_end"><img src="../../../static/img/z_t.png" alt="">123</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>


import Vue from 'vue'
import videojs from "video.js";
import "videojs-contrib-hls";
import { Button } from 'vant';

Vue.use(Button);
export default {
  data() {
    return {
      currentView: "video_box",
      playIcon: require('../../../static/img/bofang.png'),
      videoArr: [
        {
          ele_id: "video1"
        },
        {
          ele_id: "video2"
        },
        {
          ele_id: "video3"
        },
      ]
    }
  },


  mounted() {

    this.getVideo();
  },
  beforeDestroy() {
    // 组件销毁前销毁视频对象
    var myPlayer = videojs("video_text");
    myPlayer.dispose();
  },

  computed: {
  },
  methods: {

    getVideo() {

      let arrStr = this.videoArr;

      for (let index = 0; index < arrStr.length; index++) {
        const element = arrStr[index];

        videojs(element.ele_id,
          {
            autoplay: false,
            controls: true, // 是否显示控制条
            video: 'xxx', // 视频封面图地址
            preload: 'auto',
            fluid: true, // 自适应宽高
            language: 'zh-CN', // 设置语言
            muted: false, // 是否静音
            inactivityTimeout: false,
            controlBar: { // 设置控制条组件
              //  设置控制条里面组件的相关属性及显示与否
              'currentTimeDisplay': true,
              'timeDivider': true,
              'durationDisplay': true,
              'remainingTimeDisplay': false,
              volumePanel: {
                inline: false,
              },
              /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
              children: [
                { name: 'playToggle' }, // 播放按钮
                { name: 'currentTimeDisplay' }, // 当前已播放时间
                { name: 'progressControl' }, // 播放进度条
                { name: 'durationDisplay' }, // 总时间
                { // 倍数播放
                  name: 'playbackRateMenuButton',
                  'playbackRates': [0.5, 1, 1.5, 2, 2.5]
                },
                {
                  name: 'volumePanel', // 音量控制
                  inline: false, // 不使用水平方式
                },
                { name: 'FullscreenToggle' } // 全屏
              ]
            },
            sources: [ // 视频源
              {
                src: 'http://hwyvideo.shigemedia.com/ceshi/阴阳魔界第2季/vod/2a07280a476746e285e18faf59db0561/阴阳魔界第2季第1集_1_854X480_600_0.m3u8',
                type: 'application/x-mpegURL',
                video: '//vjs.zencdn.net/v/oceans.png'
              }
            ]
          },
          function() {
            console.log('视频可以播放了', this);

            this.pause();
          }
        );
      };

    },

  },



}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
.video-container {
  .video_box {
    .video-js {
      //按钮
      .vjs-big-play-button {
        /* 中间大的播放按钮 */
        font-size: 1.3514rem;
        line-height: 1.5676rem;
        height: 1.6216rem;
        width: 1.6216rem;
        -webkit-border-radius: 2.5em;
        -moz-border-radius: 2.5em;
        border-radius: 2.5em;
        background-color: rgba(128, 130, 133, 0.22);
        border-width: 0.0676rem;
        margin-top: -0.8108rem;
        margin-left: -1.0811rem;
      }
    }
    .video_box_center {
      display: flex;
      align-items: center;
      padding-top: 0.24rem;
      padding-bottom: 0.24rem;
      padding-left: 0.4267rem;
      .van-button {
        border-radius: 0.2667rem 0px 0.2667rem 0px;
        background-color: #dd9c54;
        border: none;
        height: 0.6933rem;
        font-size: 0.32rem;
      }
      .right {
        padding-right: 0.3733rem;
        margin-left: auto;
        span:nth-child(0) {
          margin-right: 0.8rem;
        }
        span.span_end {
          color: #ffc53d;
        }
        span {
          color: #fff;
          margin-left: 0.8rem;
          img {
            margin-right: 0.1333rem;
            width: 0.4rem;
          }
        }
      }
    }
  }
}
</style>
