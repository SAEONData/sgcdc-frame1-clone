(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{72:function(e,n,i){"use strict";var t=i(9),o=i.n(t),r=i(5),a=i.n(r),s=i(10),c=i.n(s),l=i(0),p=i.n(l),u=i(1),d=i.n(u),f=i(3),h=i.n(f),b=i(71),g=i(22);function m(e){return e&&"object"==typeof e&&e.window===e}function w(e){return"function"==typeof e&&e?e():null}function v(e){return"object"==typeof e&&e?e:null}var y=function(e){function n(){var i,t,r;o()(this,n);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return i=t=a()(this,e.call.apply(e,[this].concat(c))),t.forceAlign=function(){var e=t.props,n=e.disabled,i=e.target,o=e.align,r=e.onAlign;if(!n&&i){var a=h.a.findDOMNode(t),s=void 0,c=w(i),l=v(i);c?s=Object(b.a)(a,c,o):l&&(s=Object(b.b)(a,l,o)),r&&r(a,s)}},r=i,a()(t,r)}return c()(n,e),n.prototype.componentDidMount=function(){var e=this.props;this.forceAlign(),!e.disabled&&e.monitorWindowResize&&this.startMonitorWindowResize()},n.prototype.componentDidUpdate=function(e){var n,i,t=!1,o=this.props;if(!o.disabled){var r=h.a.findDOMNode(this),a=r?r.getBoundingClientRect():null;if(e.disabled)t=!0;else{var s=w(e.target),c=w(o.target),l=v(e.target),p=v(o.target);m(s)&&m(c)?t=!1:(s!==c||s&&!c&&p||l&&p&&c||p&&!((n=l)===(i=p)||n&&i&&("pageX"in i&&"pageY"in i?n.pageX===i.pageX&&n.pageY===i.pageY:"clientX"in i&&"clientY"in i&&n.clientX===i.clientX&&n.clientY===i.clientY)))&&(t=!0);var u=this.sourceRect||{};t||!r||u.width===a.width&&u.height===a.height||(t=!0)}this.sourceRect=a}t&&this.forceAlign(),o.monitorWindowResize&&!o.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize()},n.prototype.componentWillUnmount=function(){this.stopMonitorWindowResize()},n.prototype.startMonitorWindowResize=function(){this.resizeHandler||(this.bufferMonitor=function(e,n){var i=void 0;function t(){i&&(clearTimeout(i),i=null)}function o(){t(),i=setTimeout(e,n)}return o.clear=t,o}(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=Object(g.a)(window,"resize",this.bufferMonitor))},n.prototype.stopMonitorWindowResize=function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null)},n.prototype.render=function(){var e=this,n=this.props,i=n.childrenProps,t=n.children,o=p.a.Children.only(t);if(i){var r={};return Object.keys(i).forEach(function(n){r[n]=e.props[i[n]]}),p.a.cloneElement(o,r)}return o},n}(l.Component);y.propTypes={childrenProps:d.a.object,align:d.a.object.isRequired,target:d.a.oneOfType([d.a.func,d.a.shape({clientX:d.a.number,clientY:d.a.number,pageX:d.a.number,pageY:d.a.number})]),onAlign:d.a.func,monitorBufferTime:d.a.number,monitorWindowResize:d.a.bool,disabled:d.a.bool,children:d.a.any},y.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var z=y;n.a=z}}]);