export default {
    name: "HelloWorld",
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶',
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            time: "",
            name: '',
            activeName: 'first',
            holder: '请输入课堂名称',
            loadingTea: false,
            loadingStu: false,
            loadingZj: false,
            num: 0,
            tabs: ["报名用户", "授权用户", "课堂监控", "课件管理", "录制视频", "数据统计", "课堂评价"],
            searcheData: {
                selectSearchName: "1",
                serachName: "",
                serachClassRoom: "",
                serachCourseName: "",
                serachOrganizationName: "",
                serachClassroomID: "",
                searchspeakerNickname: "",
                searchspeakerPhone: "",
                searcheStudentNickname: "",
                searcheStudentAccount: ""
            },
        }
    },
    mounted() {
        if(localStorage.getItem('tabIndex')){
          this.num=localStorage.getItem('tabIndex')
        }
         this.$router.push({
              path: "/home",
              query: {
                  row: this.$route.query.row
              }
        });
        this.num=0;
      },
    methods: {
        selectTypeEvent(e) {
            this.searcheData.serachName = ""
            this.searcheData.serachClassRoom = ""
            this.searcheData.serachOrganizationName = ""
            this.searcheData.serachClassroomID = ""
            this.searcheData.searchspeakerNickname = ""
            this.searcheData.searchspeakerPhone = ""
            this.searcheData.searcheStudentNickname = ""
            if (e == 1) {
                this.holder = "请输入课堂名称";
            } else if (e == 2) {
                this.holder = "请输入课程名称";
            } else if (e == 3) {
                this.holder = "请输入机构名称";
            } else if (e == 4) {
                this.holder = "请输入课堂ID";
            } else if (e == 5) {
                this.holder = "请输入主讲昵称";
            } else if (e == 6) {
                this.holder = "请输入主讲手机号";
            } else if (e == 7) {
                this.holder = "请输入报名手机号";
            }
        },
        handleClick(tab, event) {
            console.log(tab);
            console.log(event)
        },
        tab(index) {
            localStorage.setItem("tabIndex", index);
            this.num = localStorage.getItem("tabIndex");
            if (this.num == 0) {
                this.$router.push({
                    path: "/home",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 1) {
                this.$router.push({
                    path: "/order",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 2) {
                this.$router.push({
                    path: "/content",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 3) {
                this.$router.push({
                    path: "/Self1",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 4) {
                this.$router.push({
                    path: "/Self2",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 5) {
                this.$router.push({
                    path: "/Self3",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
            if (this.num == 6) {
                this.$router.push({
                    path: "/Self4",
                    query: {
                        row: this.$route.query.row
                    }
                })
            }
        }
    }
}