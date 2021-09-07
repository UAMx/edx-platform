

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s de %(cnt)s seleccionado",
      "%(sel)s de  %(cnt)s seleccionados"
    ],
    "6 a.m.": "\u09ec \u09aa\u09c2\u09b0\u09cd\u09ac\u09be\u09b9\u09cd\u09a8",
    "6 p.m.": "6 p.m.",
    "April": "Abril",
    "August": "Agosto",
    "Available %s": "%s \u09ac\u09bf\u09a6\u09cd\u09af\u09ae\u09be\u09a8",
    "Cancel": "\u09ac\u09be\u09a4\u09bf\u09b2",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Los cambios en los pasos que no est\u00e1n seleccinados como parte de la actividad no se guardar\u00e1n.",
    "Choose": "\u09ac\u09be\u099b\u09be\u0987 \u0995\u09b0\u09c1\u09a8",
    "Choose a Date": "Elija una fecha",
    "Choose a Time": "Elija una hora",
    "Choose a time": "\u09b8\u09ae\u09df \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
    "Choose all": "\u09b8\u09ac \u09ac\u09be\u099b\u09be\u0987 \u0995\u09b0\u09c1\u09a8",
    "Chosen %s": "%s \u09ac\u09be\u099b\u09be\u0987 \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",
    "Click to choose all %s at once.": "\u09b8\u09ac %s \u098f\u0995\u09ac\u09be\u09b0\u09c7 \u09ac\u09be\u099b\u09be\u0987 \u0995\u09b0\u09be\u09b0 \u099c\u09a8\u09cd\u09af \u0995\u09cd\u09b2\u09bf\u0995 \u0995\u09b0\u09c1\u09a8\u0964",
    "Click to remove all chosen %s at once.": "Haz clic para eliminar todos los %s elegidos",
    "Could not retrieve download url.": "No se ha podido obtener la url de descarga.",
    "Could not retrieve upload url.": "No se ha podido obtener la url de subida",
    "Couldn't Save This Assignment": "No se ha podido guardar esta tarea",
    "Criterion Added": "Criterio a\u00f1adido",
    "Criterion Deleted": "Criterio eliminado",
    "December": "Diciembre",
    "Error": "Error",
    "February": "Febrero",
    "Filter": "\u09ab\u09bf\u09b2\u09cd\u099f\u09be\u09b0",
    "Hide": "\u09b2\u09c1\u0995\u09be\u09a8",
    "January": "Enero",
    "July": "Julio",
    "June": "Junio",
    "March": "Marzo",
    "May": "Mayo",
    "Midnight": "\u09ae\u09a7\u09cd\u09af\u09b0\u09be\u09a4",
    "Noon": "\u09a6\u09c1\u09aa\u09c1\u09b0",
    "Not Selected": "No seleccionado",
    "Note: You are %s hour ahead of server time.": [
      "\u09a8\u09cb\u099f: \u0986\u09aa\u09a8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09be\u09b0 \u09b8\u09ae\u09df\u09c7\u09b0 \u099a\u09c7\u09df\u09c7 %s \u0998\u09a8\u09cd\u099f\u09be \u09b8\u09be\u09ae\u09a8\u09c7 \u0986\u099b\u09c7\u09a8\u0964",
      "\u09a8\u09cb\u099f: \u0986\u09aa\u09a8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09be\u09b0 \u09b8\u09ae\u09df\u09c7\u09b0 \u099a\u09c7\u09df\u09c7 %s \u0998\u09a8\u09cd\u099f\u09be \u09b8\u09be\u09ae\u09a8\u09c7 \u0986\u099b\u09c7\u09a8\u0964"
    ],
    "Note: You are %s hour behind server time.": [
      "\u09a8\u09cb\u099f: \u0986\u09aa\u09a8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09be\u09b0 \u09b8\u09ae\u09df\u09c7\u09b0 \u099a\u09c7\u09df\u09c7 %s \u0998\u09a8\u09cd\u099f\u09be \u09aa\u09c7\u099b\u09a8\u09c7 \u0986\u099b\u09c7\u09a8\u0964",
      "\u09a8\u09cb\u099f: \u0986\u09aa\u09a8\u09bf \u09b8\u09be\u09b0\u09cd\u09ad\u09be\u09b0 \u09b8\u09ae\u09df\u09c7\u09b0 \u099a\u09c7\u09df\u09c7 %s \u0998\u09a8\u09cd\u099f\u09be \u09aa\u09c7\u099b\u09a8\u09c7 \u0986\u099b\u09c7\u09a8\u0964"
    ],
    "November": "Noviembre",
    "Now": "\u098f\u0996\u09a8",
    "October": "Octubre",
    "One or more rescheduling tasks failed.": "Una o m\u00e1s tareas reprogramadas han fallado.",
    "Option Deleted": "Opci\u00f3n eliminada",
    "Please correct the outlined fields.": "Por favor, corrige los campos marcados.",
    "Remove": "\u09ae\u09c1\u099b\u09c7 \u09ab\u09c7\u09b2\u09c1\u09a8",
    "Remove all": "\u09b8\u09ac \u09ae\u09c1\u099b\u09c7 \u09ab\u09c7\u09b2\u09c1\u09a8",
    "Saving...": "Guardando...",
    "September": "Septiembre",
    "Show": "\u09a6\u09c7\u0996\u09be\u09a8",
    "Status of Your Response": "Estado de tu respuesta",
    "The server could not be contacted.": "No se pudo contactar con el servidor.",
    "The submission could not be removed from the grading pool.": "La entrega no pudo eliminarse del tabl\u00f3n de calificaciones.",
    "This assessment could not be submitted.": "Este examen no ha podido enviarse.",
    "This feedback could not be submitted.": "Los comentarios no han podido enviarse.",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Esta es la lista de %s disponibles. Puede elegir algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo clic en la flecha \"Elegir\" que hay entre las dos cajas.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Esta es la lista de los %s elegidos. Puede elmininar algunos seleccion\u00e1ndolos en la caja inferior y luego haciendo click en la flecha \"Eliminar\" que hay entre las dos cajas.",
    "This problem could not be saved.": "Este ejercicio no ha podido guardarse.",
    "This problem has already been released. Any changes will apply only to future assessments.": "Este ejercicio ya se ha enviado. Cualquier otro cambio se aplicar\u00e1 solamente a calificaciones futuras.",
    "This response could not be saved.": "Esta respuesta no ha podido guardarse.",
    "This response could not be submitted.": "Esta respuesta no ha podido enviarse.",
    "This response has been saved but not submitted.": "Esta respuesta se ha guardado pero no se ha enviado",
    "This response has not been saved.": "Esta respuesta no se ha guardado.",
    "This section could not be loaded.": "Esta secci\u00f3n no ha podido cargarse.",
    "Today": "\u0986\u099c",
    "Tomorrow": "\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2",
    "Type into this box to filter down the list of available %s.": "Escriba en este cuadro para filtrar la lista de %s disponibles",
    "Unnamed Option": "Opci\u00f3n sin nombre",
    "Warning": "Aviso",
    "Yesterday": "\u0997\u09a4\u0995\u09be\u09b2",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Ha seleccionado una acci\u00f3n y no hs hecho ning\u00fan cambio en campos individuales. Probablemente est\u00e9 buscando el bot\u00f3n Ejecutar en lugar del bot\u00f3n Guardar.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Ha seleccionado una acci\u00f3n, pero no ha guardado los cambios en los campos individuales todav\u00eda. Pulse OK para guardar. Tendr\u00e1 que volver a ejecutar la acci\u00f3n.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Tiene cambios sin guardar en campos editables individuales. Si ejecuta una acci\u00f3n, los cambios no guardados se perder\u00e1n.",
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "Est\u00e1s a punto de enviar tu respuesta para este ejercicio. Despu\u00e9s de enviar esta respuesta, no podr\u00e1s cambiarla o enviar una nueva.",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F, Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d-%m-%Y",
      "%d-%m-%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 6,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "j M, Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "g:i A",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M",
      "%H:%M:%S.%f"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

