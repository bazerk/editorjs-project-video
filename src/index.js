require('./index.css').toString();

class ProjectVideo {

    static wrapperClassName = 'cs-project-video'
    static lhsWrapperClassName = 'cs-project-video__lhs'
    static rhsWrapperClassName = 'cs-project-video__rhs'
    static titleClassName = 'cs-project-video__title'
    static linkClassName = 'cs-project-video__link'
    static descriptionClassName = 'cs-project-video__description'

    static get toolbox() {
        return {
          title: 'Project Video',
          icon: '<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve"><style type="text/css">	.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><polyline class="st0" points="25,11 27,13 25,15 "/><polyline class="st0" points="7,11 5,13 7,15 "/><path class="st0" d="M29,23H3c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v16C31,22.1,30.1,23,29,23z"/><circle class="st0" cx="16" cy="28" r="1"/><circle class="st0" cx="10" cy="28" r="1"/><circle class="st0" cx="22" cy="28" r="1"/></svg>'
        }
      }


    constructor({data}){
        this.data = data
        if (!this.data || !this.data.title) {
            this.data = {
                title: 'Title here',
                link: '<link to the video presentation>',
                description: 'Description here',
            }
        }
    }

    render() {
        const wrapper = document.createElement('div')
        wrapper.classList.add(ProjectVideo.wrapperClassName)

        const lhsWrapper = document.createElement('div')
        lhsWrapper.classList.add(ProjectVideo.lhsWrapperClassName)
        wrapper.appendChild(lhsWrapper)
        
        const title = document.createElement('h2')
        title.contentEditable = true
        title.classList.add(ProjectVideo.titleClassName)
        title.innerHTML = this.data.title
        lhsWrapper.appendChild(title)

        const description = document.createElement('p')
        description.contentEditable = true
        description.classList.add(ProjectVideo.descriptionClassName)
        description.innerHTML = this.data.description
        lhsWrapper.appendChild(description)


        const rhsWrapper = document.createElement('div')
        rhsWrapper.classList.add(ProjectVideo.rhsWrapperClassName)
        wrapper.appendChild(rhsWrapper)

        const videoLink = document.createElement('input')
        videoLink.placeholder = 'Link to video'
        videoLink.classList.add(ProjectVideo.linkClassName)
        videoLink.value = this.data.link
        rhsWrapper.appendChild(videoLink)

        return wrapper;
    }

    save(blockContent){
        const title = blockContent.querySelector(`.${ProjectVideo.titleClassName}`)
        const link = blockContent.querySelector(`.${ProjectVideo.linkClassName}`)
        const description = blockContent.querySelector(`.${ProjectVideo.descriptionClassName}`)
        return {
          title: title.innerHTML,
          link: link.value,
          description: description.innerHTML,
        }
    }
 }

 module.exports = ProjectVideo;
