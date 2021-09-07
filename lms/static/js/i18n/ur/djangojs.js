

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
      "%(cnt)s \u0645\u06cc\u06ba \u0633\u06d2 %(sel)s \u0645\u0646\u062a\u062e\u0628 \u06a9\u06cc\u0627 \u06af\u06cc\u0627",
      "%(cnt)s \u0645\u06cc\u06ba \u0633\u06d2 %(sel)s \u0645\u0646\u062a\u062e\u0628 \u06a9\u06cc\u06d2 \u06af\u0626\u06d2"
    ],
    "6 a.m.": "6 \u0635",
    "6 p.m.": "6 p.m.",
    "April": "Abril",
    "August": "Agosto",
    "Available %s": "\u062f\u0633\u062a\u06cc\u0627\u0628 %s",
    "Cancel": "\u0645\u0646\u0633\u0648\u062e \u06a9\u0631\u06cc\u06ba",
    "Changes to steps that are not selected as part of the assignment will not be saved.": "Los cambios en los pasos que no est\u00e1n seleccinados como parte de la actividad no se guardar\u00e1n.",
    "Choose": "Elegir",
    "Choose a Date": "Elija una fecha",
    "Choose a Time": "Elija una hora",
    "Choose a time": "\u0648\u0642\u062a \u0645\u0646\u062a\u062e\u0628 \u06a9\u0631\u06cc\u06ba",
    "Choose all": "\u0633\u0628 \u0645\u0646\u062a\u062e\u0628 \u06a9\u0631\u06cc\u06ba",
    "Chosen %s": "\u0645\u0646\u062a\u062e\u0628 \u0634\u062f\u06c1 %s",
    "Click to choose all %s at once.": "Haga clic para seleccionar todos los %s de una vez",
    "Click to remove all chosen %s at once.": "Haz clic para eliminar todos los %s elegidos",
    "Could not retrieve download url.": "No se ha podido obtener la url de descarga.",
    "Could not retrieve upload url.": "No se ha podido obtener la url de subida",
    "Couldn't Save This Assignment": "No se ha podido guardar esta tarea",
    "Criterion Added": "Criterio a\u00f1adido",
    "Criterion Deleted": "Criterio eliminado",
    "December": "Diciembre",
    "Error": "Error",
    "February": "Febrero",
    "Filter": "\u0686\u06be\u0627\u0646\u0679\u06cc\u06ba",
    "Hide": "\u0686\u06be\u067e\u0627\u0626\u06cc\u06ba",
    "January": "Enero",
    "July": "Julio",
    "June": "Junio",
    "March": "Marzo",
    "May": "Mayo",
    "Midnight": "\u0646\u0635\u0641 \u0631\u0627\u062a",
    "Noon": "\u062f\u0648\u067e\u06be\u0631",
    "Not Selected": "No seleccionado",
    "Note: You are %s hour ahead of server time.": [
      "Nota: Usted esta a %s horas por delante de la hora del servidor.",
      "Nota: Usted va %s horas por delante de la hora del servidor."
    ],
    "Note: You are %s hour behind server time.": [
      "Nota: Usted esta a %s hora de retraso de tiempo de servidor.",
      "Nota: Usted va %s horas por detr\u00e1s de la hora del servidor."
    ],
    "November": "Noviembre",
    "Now": "\u0627\u0628",
    "October": "Octubre",
    "One or more rescheduling tasks failed.": "Una o m\u00e1s tareas reprogramadas han fallado.",
    "Option Deleted": "Opci\u00f3n eliminada",
    "Please correct the outlined fields.": "Por favor, corrige los campos marcados.",
    "Remove": "\u062e\u0627\u0631\u062c \u06a9\u0631\u06cc\u06ba",
    "Remove all": "Eliminar todos",
    "Saving...": "Guardando...",
    "September": "Septiembre",
    "Show": "\u062f\u06a9\u06be\u0627\u0626\u06cc\u06ba",
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
    "Today": "\u0627\u0653\u062c",
    "Tomorrow": "\u0627\u0653\u0626\u0646\u062f\u06c1 \u06a9\u0644",
    "Type into this box to filter down the list of available %s.": "Escriba en este cuadro para filtrar la lista de %s disponibles",
    "Unnamed Option": "Opci\u00f3n sin nombre",
    "Warning": "Aviso",
    "Yesterday": "\u06af\u0632\u0634\u062a\u06c1 \u06a9\u0644",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u0627\u0653\u067e \u0646\u06d2 \u0627\u06cc\u06a9 \u06a9\u0627\u0631\u0648\u0627\u0626\u06cc \u0645\u0646\u062a\u062e\u0628 \u06a9\u06cc \u06be\u06d2\u060c \u0627\u0648\u0631 \u0627\u0653\u067e \u0646\u06d2 \u0630\u0627\u062a\u06cc \u062e\u0627\u0646\u0648\u06ba \u0645\u06cc\u06ba \u06a9\u0648\u0626\u06cc \u062a\u0628\u062f\u06cc\u0644\u06cc \u0646\u06c1\u06cc\u06ba \u06a9\u06cc \u063a\u0627\u0644\u0628\u0627\u064b \u0627\u0653\u067e '\u062c\u0627\u0648\u0654' \u0628\u0679\u0646 \u062a\u0644\u0627\u0634 \u06a9\u0631 \u0631\u06be\u06d2 \u06be\u06cc\u06ba \u0628\u062c\u0627\u0626\u06d2 '\u0645\u062e\u0641\u0648\u0638 \u06a9\u0631\u06cc\u06ba' \u0628\u0679\u0646 \u06a9\u06d2\u06d4",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u0627\u0653\u067e \u0646\u06d2 \u0627\u06cc\u06a9 \u06a9\u0627\u0631\u0648\u0627\u0626\u06cc \u0645\u0646\u062a\u062e\u0628 \u06a9\u06cc \u06be\u06d2 \u0644\u06cc\u06a9\u0646 \u0627\u0628\u06be\u06cc \u062a\u06a9 \u0627\u0653\u067e \u0646\u06d2 \u0630\u0627\u062a\u06cc \u062e\u0627\u0646\u0648\u06ba \u0645\u06cc\u06ba \u0627\u067e\u0646\u06cc \u062a\u0628\u062f\u06cc\u0644\u06cc\u0627\u06ba \u0645\u062d\u0641\u0648\u0638 \u0646\u06c1\u06cc\u06ba \u06a9\u06cc \u06c1\u06cc\u06ba \u0628\u0631\u0627\u06c1 \u0645\u06be\u0631\u0628\u0627\u0646\u06cc \u0645\u062d\u0641\u0648\u0637 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u0626\u06d2 OK \u067e\u0631 \u06a9\u0644\u06a9 \u06a9\u0631\u06cc\u06ba\u06d4 \u0627\u0653\u067e \u06a9\u0627\u0648\u0627\u0626\u06cc \u062f\u0648\u0628\u0627\u0631\u06c1 \u0686\u0644\u0627\u0646\u06d2 \u06a9\u06cc \u0636\u0631\u0648\u0631\u062a \u06be\u0648\u06af\u06cc\u06d4",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u0627\u0653\u067e \u06a9\u06d2 \u067e\u0627\u0633 \u0630\u0627\u062a\u06cc \u0642\u0627\u0628\u0644 \u062a\u062f\u0648\u06cc\u0646 \u062e\u0627\u0646\u0648\u06ba \u0645\u06cc\u06ba \u063a\u06cc\u0631 \u0645\u062d\u0641\u0648\u0638 \u062a\u0628\u062f\u06cc\u0644\u06cc\u0627\u06ba \u0645\u0648\u062c\u0648\u062f \u06be\u06cc\u06ba\u06d4 \u0627\u06af\u0631 \u0627\u0653\u067e \u06a9\u0648\u0626\u06cc \u06a9\u0627\u0631\u0648\u0627\u0626\u06cc \u06a9\u0631\u06cc\u06ba \u06af\u06d2 \u062a\u0648 \u0627\u0653\u067e \u06a9\u06cc \u063a\u06cc\u0631 \u0645\u062d\u0641\u0648\u0638 \u062a\u0628\u062f\u06cc\u0644\u06cc\u0627\u06ba \u0636\u0627\u0626\u0639 \u06be\u0648 \u062c\u0627\u0626\u06cc\u06ba \u06af\u06cc\u06d4",
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
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
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

