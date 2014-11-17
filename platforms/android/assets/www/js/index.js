/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var app = {
//    // Application Constructor
//    initialize: function() {
//        console.log("init");
//        this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function() {
//        console.log("bind");
//        document.addEventListener('deviceready', this.onDeviceReady, false);
//        var button = document.getElementById("button");
//        console.log(button);
//        button.addEventListener('click', onButtonClicked, false);
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicitly call 'app.receivedEvent(...);'
//    onDeviceReady: function() {
//        console.log("deviceready");
//        app.receivedEvent('deviceready');
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function(id) {
//        console.log("receive");
//        /*var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//
//        console.log('Received Event: ' + id);*/
//
//        pictureSource = navigator.camera.PictureSourceType;
//        destinationType = navigator.camera.DestinationType;
//
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, FileIO.gotFS, FileIO.errorHandler);
//    }
//};

var pictureSource;
var destinationType;

document.addEventListener("deviceready",onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    var capturedImage = document.getElementById('capturedImage');
    capturedImage.src = imageData;
    alert(imageData);
}

function onPhotoURISuccess(imageURI) {
    var openedImage = document.getElementById('openedImage');
    openedImage.src = imageURI;
    alert(imageURI);
}

function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        saveToPhotoAlbum: true,
        correctOrientation: true
    });
}

function openPhoto() {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.PHOTOLIBRARY
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
}