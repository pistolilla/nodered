//  throw new Error("loading node-red-contrib-math");
module.exports = function (RED) {

    function MathNode(config) {
        let node = this;
        RED.nodes.createNode(this, config);
        this.append = config.append;
        this.operation = config.operation;

        this.on("input", function(msg) {
            if (typeof msg.payload === 'number') {
                let n = msg.payload;
                node.name = node.operation;
                switch (node.operation) {
                    case "floor":
                        msg.payload = Math.floor(n);
                    break;
                    case "round":
                        msg.payload = Math.round(n);
                    break;
                    case "sqrt":
                        msg.payload = Math.sqrt(Math.abs(n));
                    break;
                    default:
                    break;
                }
                node.send(msg);
            }
            else {
                node.error("Payload not a number", msg);
            }
        });
    }

    RED.nodes.registerType("math", MathNode);
}