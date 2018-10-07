const Canvas = require('canvas');

class Helper {
    static async achievement(picture, achievment){
        var Image = await Canvas.Image;
        var canvas = await new Canvas(960, 173);
        var ctx = await canvas.getContext('2d');

        const achievementbg = new Image();
        achievementbg.onload = () => ctx.drawImage(achievementbg, 0, 0);
        achievementbg.onerror = err => { throw err };
        achievementbg.src = "achievementget.png";

        ctx.fillStyle = "#212121";
        ctx.fillRect(30,30,900,130);

        const imgg = new Image();
        imgg.onload = () => ctx.drawImage(imgg, 30, 30, 115, 115);
        imgg.onerror = err => { throw err };
        let avatarbuffer;
        require('snekfetch').get(picture).then(r => avatarbuffer = r.body);
        const text = achievment;

        ctx.font = '45px Minecraftia';
        ctx.fillStyle = "#fffd3e";
        ctx.fillText("Achievement Get!", 170, 75);
        ctx.fillStyle = "white";
        ctx.fillText(text, 170, 135);

        imgg.src = avatarbuffer;

        var finalimage= await canvas.toBuffer();

        return finalimage;
    }
}

module.exports = Helper;