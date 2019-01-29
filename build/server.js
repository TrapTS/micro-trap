"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const micro_1 = require("micro");
const microrouter_1 = require("microrouter");
const getHello = (req, res) => {
    const data = {
        status: 'ok',
        data: {
            toWho: req.params.toWho
        }
    };
    micro_1.send(res, 200, data);
};
exports.default = microrouter_1.router(microrouter_1.get('/hello/:toWho', getHello));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QjtBQUM1Qiw2Q0FBa0U7QUFFbEUsTUFBTSxRQUFRLEdBQTRCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JELE1BQU0sSUFBSSxHQUFHO1FBQ1gsTUFBTSxFQUFFLElBQUk7UUFDWixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3hCO0tBQ0YsQ0FBQTtJQUNELFlBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQUVELGtCQUFlLG9CQUFNLENBQUMsaUJBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQSJ9