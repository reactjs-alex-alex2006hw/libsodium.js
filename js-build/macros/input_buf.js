if (!{var_name} || typeof {var_name} == 'undefined') throw new Error('{var_name} cannot be null or undefined');
var {var_name}_byte;
var {var_name}_size = {var_size};
if ({var_name} instanceof Uint8Array){
	if ({var_name}.length != {var_size}) throw new TypeError('invalid {var_name} size');
	{var_name}_byte = injectBytes({var_name});
} else if (typeof {var_name} == 'string'){
	if (encode_utf8({var_name}).length != {var_size}) throw new TypeError('invalid {var_name} size');
	{var_name}_byte = injectBytes(encode_utf8({var_name}));
} else throw new TypeError('Illegal input type for {var_name}');