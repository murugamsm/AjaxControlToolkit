// (c) 2010 CodePlex Foundation
(function(){var b="HtmlEditorExtenderBehavior";function a(){var z="ToolbarButtons",q="change",y="BackColor",t="block",w="ForeColor",m="blur",j="click",f="on",d="",s="select",e="px",l="button",k="input",v="_ExtenderSourceView",p="ajax__html_editor_extender_texteditor",c=true,n="both",o="auto",u="_ExtenderContentEditable",h="unselectable",g="div",r="content",b=false,a=null;Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.HtmlEditorExtenderBehavior=function(j){var f="ajax__html_editor_extender_button",d=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.initializeBase(d,[j]);d._textbox=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(j);var i=d.get_id();d._backColor=a;d._foreColor=a;d._commandName=a;d._savedRange=a;d._isInFocus=a;d._oldContents=a;d._newContents=a;d._isDirty=b;d._viewMode=r;d._displaySourceTab=b;d._ButtonWidth=23;d._ButtonHeight=21;d._containerTemplate={nodeName:g,properties:{id:i+"_ExtenderContainer"},cssClasses:[h,"ajax__html_editor_extender_container"]};d._editableTemplate={nodeName:g,properties:{id:i+u,style:{overflow:o,clear:n},contentEditable:c},cssClasses:[p]};d._sourceViewTemplate={nodeName:g,properties:{id:i+v,style:{height:"90%",overflow:o,clear:n},contentEditable:c},cssClasses:[p]};d._buttonTemplate={nodeName:k,properties:{type:l,style:{width:d._ButtonWidth+e,height:d._ButtonHeight+e}},cssClasses:[f]};d._buttonContentTemplate={nodeName:k,properties:{type:l,style:{width:d._ButtonWidth+e,height:d._ButtonHeight+e}},cssClasses:["ajax__html_editor_extender_button ajax__html_editor_extender_content"]};d._buttonSourceTemplate={nodeName:k,properties:{type:l,style:{width:d._ButtonWidth+e,height:d._ButtonHeight+e}},cssClasses:["ajax__html_editor_extender_button ajax__html_editor_extender_source"]};d._textboxTemplate={nodeName:k,properties:{type:"text"}};d._dropDownTemplate={nodeName:s,properties:{style:{width:d._ButtonWidth+e,height:d._ButtonHeight+e}},cssClasses:[f]};d._topButtonContainerTemplate={nodeName:g,properties:{id:i+"_ExtenderButtonContainer"},cssClasses:["ajax__html_editor_extender_buttoncontainer"]};d._topButtonContainerTemplate2={nodeName:g,properties:{id:i+"_ExtenderButtonContainer2",style:{clear:n}},cssClasses:["ajax__html_editor_extender_buttoncontainer2"]};d._container=a;d._toolbarButtons=a;d._editableDiv=a;d._sourceViewDiv=a;d._topButtonContainer=a;d._topButtonContainer2=a;d._buttons=[];d._btnClickHandler=a;d._requested_buttons=[];d._colorPicker=a;d._txtBoxForColor=a;d._contentViewButton=a;d._sourceViewButton=a;d._popupDiv=a;d._btnDone=a;d._btnCancel=a;d._isFocusInEditableDiv;d._textBoxOnBlurDelegate=a;d._editableDivOnBlurDelegate=a;d._editableDivOnFocusDelegate=a;d._btnClickDelegate=a;d._contentViewClickDelegate=a;d._sourceViewClickDelegate=a;d._sourceViewDivOnBlurDelegate=a;d._imageCancelClickDelegate=a;if(typeof WebForm_OnSubmit=="function"&&!Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit){Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit=WebForm_OnSubmit;WebForm_OnSubmit=Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit}};Sys.Extended.UI.HtmlEditorExtenderBehavior.prototype={initialize:function(){var h="_popupDiv",e=this;Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(e,"initialize");A[A.length]=e;e._button_list=[];e._createContainer();e._createTopButtonContainer();e._createButton();e._createEditableDiv();if(e.get_displaySourceTab()){e._createSourceViewDiv();e._createTopButtonContainer2()}var i=e._textbox._element.parentNode;while(i!=a&&i.nodeName!="FORM")i=i.parentNode;if(i==a)throw"Missing Form tag";var g=e.get_id();e._popupDiv=$get(g+h);if(e._popupDiv==a){if(g.indexOf("_")!=-1)g=g.substring(g.lastIndexOf("_")+1);else g=d;e._popupDiv=$get(g+h)}if(e._popupDiv!=a){e._popupBehavior=$create(Sys.Extended.UI.PopupBehavior,{id:g+"_ImagePopupBehavior",parentElement:e.get_element(),unselectable:f},a,a,e._popupDiv);e._btnCancel=$get(g+"_btnCancel");e._imageCancelClickDelegate=Function.createDelegate(e,e._btnCancel_click);$addHandler(e._btnCancel,j,e._imageCancelClickDelegate,c);e._elementVisible(e._popupDiv,b)}e._textBoxOnBlurDelegate=Function.createDelegate(e,e._textBox_onblur);e._editableDivOnBlurDelegate=Function.createDelegate(e,e._editableDiv_onblur);e._editableDivOnFocusDelegate=Function.createDelegate(e,e._editableDiv_onfocus);e._btnClickDelegate=Function.createDelegate(e,e._executeCommand);if(e.get_displaySourceTab()){e._contentViewClickDelegate=Function.createDelegate(e,e._contentView_click);e._sourceViewClickDelegate=Function.createDelegate(e,e._sourceView_click);e._sourceViewDivOnBlurDelegate=Function.createDelegate(e,e._sourceViewDiv_onblur)}$addHandler(e._textbox._element,m,e._textBoxOnBlurDelegate,c);$addHandler(e._editableDiv,m,e._editableDivOnBlurDelegate,c);$addHandler(e._editableDiv,"focus",e._editableDivOnFocusDelegate,c);$addHandler(e._topButtonContainer,j,e._btnClickDelegate,c);if(e.get_displaySourceTab()){$addHandler(e._contentViewButton,j,e._contentViewClickDelegate,c);$addHandler(e._sourceViewButton,j,e._sourceViewClickDelegate,c);$addHandler(e._sourceViewDiv,m,e._sourceViewDivOnBlurDelegate,c)}},_dispose:function(){var b=this;$removeHandler(b._textbox._element,m,b._textBoxOnBlurDelegate);$removeHandler(b._editableDiv,m,b._editableDivOnBlurDelegate);$removeHandler(b._editableDiv,"focus",b._editableDivOnFocusDelegate);$removeHandler(b._topButtonContainer,j,b._btnClickDelegate);if(b.get_displaySourceTab()){$removeHandler(b._contentViewButton,j,b._contentViewClickDelegate);$removeHandler(b._sourceViewButton,j,b._sourceViewClickDelegate);$removeHandler(b._sourceViewDiv,m,b._sourceViewDivOnBlurDelegate)}b._popupDiv!=a&&$removeHandler(b._btnCancel,j,b._imageCancelClickDelegate);Sys.Extended.UI.HtmlEditorExtenderBehavior.callBaseMethod(b,"dispose")},_createContainer:function(){var a=this,e=a.get_element();a._container=$common.createElementFromTemplate(a._containerTemplate,e.parentNode);a._elementVisible(a._textbox._element,c);var d=$common.getBounds(a._textbox._element);$common.setSize(a._container,{width:d.width,height:d.height});a._elementVisible(a._textbox._element,b);$common.wrapElement(a._textbox._element,a._container,a._container)},_createTopButtonContainer:function(){this._topButtonContainer=$common.createElementFromTemplate(this._topButtonContainerTemplate,this._container)},_createButton:function(){var p="ajax__html_editor_extender_button ajax__html_editor_extender_",o="21px",j="transparent",r="solid 1px #c2c2c2",n="Arial",m="11px",d="left",e="span",c=this,v=Sys.Browser.agent==Sys.Browser.InternetExplorer;for(i=0;i<c._toolbarButtons.length;i++){var g;if(c._toolbarButtons[i].CommandName=="HorizontalSeparator")g=$common.createElementFromTemplate({nodeName:e,cssClasses:["ajax__html_editor_extender_separator"]},c._topButtonContainer);else if(c._toolbarButtons[i].CommandName=="FontName"){g=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{"float":d,cssFloat:d,fontSize:m}},cssClasses:["fontnameclass"],children:[{nodeName:e,properties:{textContent:"Font ",innerText:"Font ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},c._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:s,properties:{style:{fontSize:"9px",fontFamily:n,height:"20px",width:"90px"}},events:{change:function(){var a=this.options[this.selectedIndex].value;setTimeout(function(){document.execCommand("fontname",b,a)},200)}}},g);var u=[{Text:n,Value:"arial,helvetica,sans-serif"},{Text:"Courier New",Value:"courier new,courier,monospace"},{Text:"Georgia",Value:"georgia,times new roman,times,serif"},{Text:"Tahoma",Value:"tahoma,arial,helvetica,sans-serif"},{Text:"Times New Roman",Value:"times new roman,times,serif"},{Text:"Verdana",Value:"verdana,arial,helvetica,sans-serif"},{Text:"Impact",Value:"impact"},{Text:"WingDings",Value:"wingdings"}];for(x in u){var q=document.createElement("option");q.text=u[x].Text;q.value=u[x].Value;try{_select.add(q,a)}catch(A){_select.add(q)}}_select.setAttribute("id",c._id+c._toolbarButtons[i].CommandName);_select.setAttribute("name",c._toolbarButtons[i].CommandName);_select.setAttribute("title",c._toolbarButtons[i].Tooltip);_select.setAttribute(h,f)}else if(c._toolbarButtons[i].CommandName=="FontSize"){g=$common.createElementFromTemplate({nodeName:"nobr",properties:{style:{"float":d,cssFloat:d,fontSize:m}},cssClasses:["fontsizeclass"],children:[{nodeName:e,properties:{textContent:"Size ",innerText:"Size ",style:{paddingLeft:"5px",fontWeight:"bold"}}}]},c._topButtonContainer);_select=$common.createElementFromTemplate({nodeName:s,properties:{style:{fontSize:m,fontFamily:n,height:"20px",width:v?"30px":"50px"}},events:{change:function(){var a=this.options[this.selectedIndex].value;setTimeout(function(){document.execCommand("fontsize",b,a)},200)}}},g);var u=[{Text:"1",Value:"1"},{Text:"2",Value:"2"},{Text:"3",Value:"3"},{Text:"4",Value:"4"},{Text:"5",Value:"5"},{Text:"6",Value:"6"},{Text:"7",Value:"7"}];for(x in u){var q=document.createElement("option");q.text=u[x].Text;q.value=u[x].Value;try{_select.add(q,a)}catch(A){_select.add(q)}}_select.setAttribute("id",c._id+c._toolbarButtons[i].CommandName);_select.setAttribute("name",c._toolbarButtons[i].CommandName);_select.setAttribute("title",c._toolbarButtons[i].Tooltip);_select.setAttribute(h,f)}else if(c._toolbarButtons[i].CommandName==w){g=$common.createElementFromTemplate({nodeName:e,properties:{style:{backgroundColor:"#ff0000",border:r,display:t,"float":d,cssFloat:d}},cssClasses:["forecolorclass"]},c._topButtonContainer);g.setAttribute(h,f);c._foreColor=$common.createElementFromTemplate({nodeName:k,properties:{type:l,id:c._id+c._toolbarButtons[i].CommandName,name:c._toolbarButtons[i].CommandName,title:c._toolbarButtons[i].Tooltip,style:{backgroundColor:j,width:o,height:"19px",color:j}},cssClasses:[p+c._toolbarButtons[i].CommandName]},g);c._foreColor.setAttribute(h,f)}else if(c._toolbarButtons[i].CommandName==y){g=$common.createElementFromTemplate({nodeName:e,properties:{style:{backgroundColor:"#ff0000",border:r,display:t,"float":d,cssFloat:d}},cssClasses:["backcolorclass"]},c._topButtonContainer);g.setAttribute(h,f);c._backColor=$common.createElementFromTemplate({nodeName:k,properties:{type:l,id:c._id+c._toolbarButtons[i].CommandName,name:c._toolbarButtons[i].CommandName,title:c._toolbarButtons[i].Tooltip,style:{backgroundColor:j,width:o,height:"19px",color:j}},cssClasses:[p+c._toolbarButtons[i].CommandName]},g);c._backColor.setAttribute(h,f)}else{var z={Copy:1,Cut:1,Paste:1};if(!(Sys.Browser.agent!=Sys.Browser.InternetExplorer&&z[c._toolbarButtons[i].CommandName])){g=$common.createElementFromTemplate({nodeName:k,properties:{type:l,id:c._id+c._toolbarButtons[i].CommandName,name:c._toolbarButtons[i].CommandName,title:c._toolbarButtons[i].Tooltip,style:{width:"23px",height:o}},cssClasses:[p+c._toolbarButtons[i].CommandName]},c._topButtonContainer);g.setAttribute(h,f)}Array.add(c._buttons,g)}}},_createEditableDiv:function(){var a=this,f=a.get_id(),d;a._elementVisible(a._container,c);if(a.get_displaySourceTab())d=a._container.clientHeight-(a._topButtonContainer.clientHeight+25);else d=a._container.clientHeight-a._topButtonContainer.clientHeight;a._elementVisible(a._container,b);a._editableDiv=$common.createElementFromTemplate({nodeName:g,properties:{id:f+u,style:{height:d+e,overflow:o,clear:n},contentEditable:c},cssClasses:[p]},a._container);a._editableDiv.innerHTML=a._textbox._element.value;a._oldContents=a._editableDiv.innerHTML;$common.setVisible(a._textbox._element,b)},_createTopButtonContainer2:function(){var a=this;a._topButtonContainer2=$common.createElementFromTemplate(a._topButtonContainerTemplate2,a._container);a._contentViewButton=$common.createElementFromTemplate(a._buttonContentTemplate,a._topButtonContainer2);a._sourceViewButton=$common.createElementFromTemplate(a._buttonSourceTemplate,a._topButtonContainer2)},_createSourceViewDiv:function(){var a=this,f=a.get_id(),d=a._container.clientHeight-25;a._sourceViewDiv=$common.createElementFromTemplate({nodeName:g,properties:{id:f+v,style:{height:d+e,overflow:o,clear:n},contentEditable:c},cssClasses:[p]},a._container);$common.setVisible(a._sourceViewDiv,b)},_editableDiv_onblur:function(){var a=this;a._textbox._element.value=a._encodeHtml();a._isFocusInEditableDiv=b;if(a._oldContents!=a._editableDiv.innerHTML){a._isDirty=c;a._oldContents=a._editableDiv.innerHTML;a._raiseEvent(q)}},_editableDiv_onfocus:function(){this._isFocusInEditableDiv=b},_sourceViewDiv_onblur:function(){var a=this;if(a._oldContents!=(a._sourceViewDiv.innerText||a._sourceViewDiv.textContent)){a._isDirty=c;if(a._sourceViewDiv.textContent!=undefined)a._editableDiv.innerHTML=a._sourceViewDiv.textContent;else a._editableDiv.innerHTML=a._sourceViewDiv.innerText;a._oldContents=a._editableDiv.innerHTML;a._raiseEvent(q)}},_textBox_onblur:function(){this._editableDiv.innerHTML=this._textbox._element.value},_contentView_click:function(){var a=this;if(a._viewMode!=r){$common.setVisible(a._topButtonContainer,c);$common.setVisible(a._editableDiv,c);if(a._sourceViewDiv.textContent!=undefined)a._editableDiv.innerHTML=a._sourceViewDiv.textContent;else a._editableDiv.innerHTML=a._sourceViewDiv.innerText;a._oldContents=a._editableDiv.innerHTML;$common.setVisible(a._sourceViewDiv,b);a._viewMode=r}},_sourceView_click:function(){var a=this;if(a._viewMode!="source"){$common.setVisible(a._sourceViewDiv,c);if(a._sourceViewDiv.textContent!=undefined)a._sourceViewDiv.textContent=a._editableDiv.innerHTML;else a._sourceViewDiv.innerText=a._editableDiv.innerHTML;a._oldContents=a._editableDiv.innerHTML;$common.setVisible(a._editableDiv,b);$common.setVisible(a._topButtonContainer,b);a._viewMode="source"}},_btnCancel_click:function(){this._popupBehavior.hide()},_attributes:{style:"st_yle_",size:"si_ze_",color:"co_lor_",face:"fa_ce_",align:"al_ign_"},_rgbToHex:function(b){var a=/rgb\s?\(\s?(\d+)\s?,\s?(\d+)\s?,\s?(\d+)\s?\)/.exec(b);return"#"+(parseInt(a[3],10)|parseInt(a[2],10)<<8|parseInt(a[1],10)<<16).toString(16)},_encodeHtml:function(){for(var e=Sys.Browser.agent==Sys.Browser.InternetExplorer,g=this._editableDiv.getElementsByTagName("*"),b,f=0;b=g[f];f++){try{b.className=d;b.removeAttribute("class")}catch(j){}try{b.id=d;b.removeAttribute("id")}catch(j){}try{b.removeAttribute("width")}catch(j){}e}var a=this._editableDiv.innerHTML;if(e){var h=/\<[^a\>]+\>/g;a=a.replace(h,function(c){var b=/\=\'([^\'])*\'/g,a=/\=([^\"][^\s\/\>]*)/g;return c.replace(b,'="$1"').replace(a,'="$1"')})}var i=this._rgbToHex,c=function(){a=a.replace(/(\<[^\>]+)(rgb\s?\(\d{1,3}\s?\,\s?\d{1,3}\s?\,\s?\d{1,3}\s?\))([^\>]*\>)/gi,function(e,b,a,c){return(b||d)+(a&&i(a)||d)+(c||d)})};c();c();a=a.replace(/\sclass\=\"\"/gi,d).replace(/\sid\=\"\"/gi,d);a=a.replace(/\<(\/?)strong\>/gi,"<$1b>").replace(/\<(\/?)em\>/gi,"<$1i>");a=a.replace(/&/ig,"&amp;").replace(/\xA0/ig,"&nbsp;");a=a.replace(/</ig,"&lt;").replace(/>/ig,"&gt;").replace(/\'/ig,"&apos;").replace(/\"/ig,"&quot;");return a},_editableDiv_submit:function(){var c=3,b=a;setTimeout(function(){this._editableDiv!=a&&this._editableDiv.focus()},0);if(Sys.Browser.agent!=Sys.Browser.Firefox)if(document.selection){b=document.selection.createRange();b.moveStart("character",c);b.select()}else{b=window.getSelection();b.collapse(this._editableDiv.firstChild,c)}this._textbox._element.value=this._encodeHtml()},_executeCommand:function(h){var j="createLink",e=this;if(h.target.name==undefined)return;var q=Sys.Browser.agent==Sys.Browser.Firefox,m=Function.createDelegate(e,e._colorPicker_onchange);q&&document.execCommand("styleWithCSS",b,b);var t={JustifyRight:1,JustifyLeft:1,JustifyCenter:1,JustifyFull:1,Indent:1,Outdent:1};if(t[h.target.name])try{document.execCommand(h.target.name,b,a)}catch(v){if(v&&v.result==2147500037){var r=window.getSelection().getRangeAt(0),k=document.createElement(g),n=b;k.style.height="1px;";if(r.startContainer.contentEditable=="true"){window.getSelection().collapseToEnd();n=c}var i=window.getSelection().getRangeAt(0).startContainer;while(i&&i.contentEditable!="true")i=i.parentNode;if(!i)throw"Selected node is not editable!";i.insertBefore(k,i.childNodes[0]);document.execCommand(h.target.name,b,a);k.parentNode.removeChild(k);n&&window.getSelection().addRange(r)}else window.console&&window.console.log&&window.console.log(v)}else if(h.target.name==j){var s=prompt("Please insert  URL",d);s&&document.execCommand(j,b,s)}else if(h.target.name==w){e._commandName=h.target.name;e.saveSelection();if(!e._foreColorPicker){e._foreColorPicker=$create(Sys.Extended.UI.ColorPickerBehavior,{unselectable:f},{},{},e._foreColor);e._foreColorPicker.set_sample(e._foreColor.parentNode);e._foreColorPicker.add_colorSelectionChanged(m)}e._foreColorPicker.show()}else if(h.target.name==y){e._commandName=h.target.name;e.saveSelection();if(!e._backColorPicker){e._backColorPicker=$create(Sys.Extended.UI.ColorPickerBehavior,{unselectable:f},{},{},e._backColor);e._backColorPicker.set_sample(e._backColor.parentNode);e._backColorPicker.add_colorSelectionChanged(m)}e._backColorPicker.show()}else if(h.target.name=="UnSelect")if(q){e._editableDiv.focus();var u=window.getSelection();u.collapse(e._editableDiv.firstChild,0)}else document.execCommand(h.target.name,b,a);else if(h.target.name=="InsertImage"){!e._isFocusInEditableDiv&&e._editableDiv.focus();e.saveSelection();for(var o=Sys.Application.getComponents(),l=0;l<o.length;l++){var p=o[l];if(Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(p))if(p._popupBehavior._visible)return}e._elementVisible(e._popupDiv,c);e._popupBehavior.show();$common.setStyle(e._popupDiv,{position:"fixed",top:d,left:d,opacity:"1"})}else document.execCommand(h.target.name,b,a)},_colorPicker_onchange:function(d){var a="stylewithcss";this.restoreSelection();if(/backcolor/i.test(this._commandName)){var e=Sys.Browser.agent==Sys.Browser.Firefox;if(e){document.execCommand(a,b,c);document.execCommand("hilitecolor",b,"#"+d._selectedColor);document.execCommand(a,b,b)}else document.execCommand("backcolor",b,"#"+d._selectedColor)}else document.execCommand(this._commandName,b,"#"+d._selectedColor)},saveSelection:function(){if(window.getSelection)this._savedRange=window.getSelection().getRangeAt(0);else if(document.selection)this._savedRange=document.selection.createRange()},restoreSelection:function(){var b=this;b._isInFocus=c;if(b._savedRange!=a)if(window.getSelection){var d=window.getSelection();d.rangeCount>0&&d.removeAllRanges();d.addRange(b._savedRange)}else if(document.createRange)window.getSelection().addRange(b._savedRange);else document.selection&&b._savedRange.select()},_elementVisible:function(a,f){var e="visibleChanged",d="displayChanged";if(a.tagName=="FORM")return;if(f){if(a.style.display=="none"){a.style.display=t;a.setAttribute(d,c)}if(a.style.visibility=="hidden"){a.style.visibility="visible";a.setAttribute(e,c)}this._elementVisible(a.parentNode,c)}else{if(a.getAttribute(d)){a.style.display="none";a.removeAttribute(d)}a.getAttribute(e)&&a.removeAttribute(e);this._elementVisible(a.parentNode,b)}},_raiseEvent:function(c,a){var b=this.get_events().getHandler(c);if(b){if(!a)a=Sys.EventArgs.Empty;b(this,a)}},get_ButtonWidth:function(){return this._ButtonWidth},set_ButtonWidth:function(a){if(this._ButtonWidth!=a){this._ButtonWidth=a;this.raisePropertyChanged("ButtonWidth")}},get_ButtonHeight:function(){return this._ButtonHeight},set_ButtonHeight:function(a){if(this._ButtonHeight!=a){this._ButtonHeight=a;this.raisePropertyChanged("ButtonHeight")}},get_ToolbarButtons:function(){return this._toolbarButtons},set_ToolbarButtons:function(a){if(this._toolbarButtons!=a){this._toolbarButtons=a;this.raisePropertyChanged(z)}},get_displaySourceTab:function(){return this._displaySourceTab},set_displaySourceTab:function(a){if(this._displaySourceTab!=a){this._displaySourceTab=a;this.raisePropertyChanged("DisplaySourceTab")}},add_change:function(a){this.get_events().addHandler(q,a)},remove_change:function(a){this.get_events().removeHandler(q,a)},get_isDirty:function(){return this._isDirty}};Sys.Extended.UI.HtmlEditorExtenderBehavior.registerClass("Sys.Extended.UI.HtmlEditorExtenderBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.HtmlEditorExtenderBehavior,{name:"HtmlEditorExtender",parameters:[{name:z,type:"HtmlEditorExtenderButton[]"}]});var A=[];Sys.Extended.UI.HtmlEditorExtenderBehavior.WebForm_OnSubmit=function(){var d=Sys.Extended.UI.HtmlEditorExtenderBehavior._originalWebForm_OnSubmit();if(d)for(var b=Sys.Application.getComponents(),a=0;a<b.length;a++){var c=b[a];Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(c)&&c._editableDiv_submit()}return d},Sys.Extended.UI.HtmlEditorExtenderBehavior.IsDirty=function(){for(var d=Sys.Application.getComponents(),a=0;a<d.length;a++){var e=d[a];if(Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(e))if(e._isDirty)return c}return b},ajaxClientUploadComplete=function(b,i){for(var c=a,h=Sys.Application.getComponents(),f=0;f<h.length;f++){var d=h[f];if(Sys.Extended.UI.HtmlEditorExtenderBehavior.isInstanceOfType(d))if(d._popupBehavior._visible){c=d;f=d.length}}var g=i.get_postedUrl().replace("&amp;","&");if(c!=a){c.restoreSelection();if(document.selection&&document.selection.createRange)try{c._savedRange.pasteHTML("<img src='"+g+"' />")}catch(j){var e=document.createElement("img");e.src=g;c._savedRange.insertNode(e)}else{var e=document.createElement("img");e.src=g;c._savedRange.insertNode(e)}if(b._filesInQueue.length==b._currentQueueIndex+1){while(b._filesInQueue.length>=1){b._filesInQueue[0].removeNodeFrom(b._queueContainer);Array.removeAt(b._filesInQueue,0)}b._showFilesCount();b._reset();c._popupBehavior.hide()}}}}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a);else a()})();