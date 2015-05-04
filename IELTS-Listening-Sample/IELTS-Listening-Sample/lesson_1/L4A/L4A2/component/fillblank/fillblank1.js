(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fillblank1'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "	<div class=\"question_title\">\r\n		<span class=\"number\">"
    + alias1(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span>\r\n		<p >"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.title : depth0)) != null ? stack1.en : stack1), depth0))
    + "</p>\r\n	</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<div class=\"list clearfix\" data-order=\""
    + alias3(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"order","hash":{},"data":data}) : helper)))
    + "\">\r\n				<div class=\"left_side title\">\r\n					<span class=\"bold order\">"
    + alias3(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"order","hash":{},"data":data}) : helper)))
    + "</span>\r\n				</div>\r\n				<ul class=\"right_side\">\r\n				<li>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</li>\r\n				</ul>\r\n			</div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.plain : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    return "						"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.text : depth0), depth0))
    + "\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "						<input class=\"tex purple_input mb5 fb_blank\" type=\"text\" data-answer=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.answer : depth0), depth0))
    + "\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"content\">\r\n		<div class=\"question_cont\">\r\n			<div class=\"questions_list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n		<div id=\"skb1\" class=\"keyBox\"></div>\r\n      	<div class=\"annotation\">\r\n       		<div class=\"correct\"></div><span>correct</span>\r\n       		<div class=\"error\"></div><span>error</span>\r\n    	</div>\r\n	</div>";
},"useData":true});
})();