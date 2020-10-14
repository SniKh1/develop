<!-- home -->

<template>
  <div class="video-container">
    <template>
      <div class="video_box">
        <video id="my-video" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="500px">
          <source src="http://gt.shigemedia.com/vod/dianshiju/shendunjutegongdi2ji/tv/shendunjutegongdi2jidi1ji.mp4" type="application/x-mpegURL" />
        </video>
      </div>
      <!-- <button @click="checkVideo()">点击切换到CCTV3</button> -->
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import videojs from "video.js";
import "videojs-contrib-hls";


export default {
  data() {
    return {
      active: 2
    }
  },

  computed: {},

  mounted() {
    this.getVideo();
  },

  methods: {
    // getVideo() {
    //   videojs(
    //     "my-video",
    //     {
    //       bigPlayButton: true,
    //       textTrackDisplay: false,
    //       posterImage: true,
    //       errorDisplay: false,
    //       controlBar: true
    //     },
    //     function() {
    //       this.play();
    //     }
    //   );

    // },
    getVideo() {
      videojs("my-video",
        {
          controls: true, // 是否显示控制条
          poster: 'xxx', // 视频封面图地址
          preload: 'auto',
          autoplay: false,
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
              poster: '//vjs.zencdn.net/v/oceans.png'
            }
          ]
        },
        function() {
          console.log('视频可以播放了', this);
          this.play();

        }
      );
    },
    checkVideo() {
      var myPlayer = videojs("my-video");
      myPlayer.src([
        {
          type: "application/x-mpegURL",
          src: "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8" //CCTV3频道
        }
      ]);
      myPlayer.play();
    }

  },

  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/video_play/video_action.scss';
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
  }
}
</style>
