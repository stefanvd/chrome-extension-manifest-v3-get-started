//================================================
/*

Simple
Chrome extension Manifest V3 Tutorial
Copyright (C) 2022 Stefan vd
www.stefanvd.net

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

var newdiv = document.createElement("div");
newdiv.id = "hellothere";
newdiv.style.background = "blue";
newdiv.style.color = "white";
newdiv.style.zIndex = 1000;
newdiv.style.position = "absolute";
newdiv.style.top = 0;
newdiv.style.left = 0;
newdiv.style.width = "200px";
newdiv.style.height = "100px";
newdiv.style.display = "flex";
newdiv.style.justifyContent = "center";
newdiv.style.alignItems = "center";
newdiv.innerText = "I am here";
document.body.appendChild(newdiv)