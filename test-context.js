var context = require.context('./problems', true, /\.spec\.js$/);

context.keys().forEach(context);
